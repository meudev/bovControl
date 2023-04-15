import {
    createCheckList,
    deleteCheckList,
    listCheckList,
    updateCheckList
} from '../repositorio/Repositorio';

import {
    createCheckList as createCheckListOffline,
    listCheckList as listCheckListOffline,
    updateCheckList as updateCheckListOffline
} from '../../offline/repositorio/Repository';

import {
    returnOddObjectFromTwoArrays
} from '../../../hooks';

import { ChecklistDTO } from '../../../dto/ChecklistDTO';

export async function synchronizeDatabases(listChecklists: ChecklistDTO[]) {
    try {
        const listCheckListApi = await listCheckList();

        //Valida se existe algum id sem registro na API
        const missingChecklistApi = listChecklists.filter((checklist: ChecklistDTO) =>
            !listCheckListApi?.find((checklistFind: ChecklistDTO) => checklistFind._id === checklist._id),
        );

        //Cria os registro na API
        if (missingChecklistApi.length > 0) {
            await createCheckList(missingChecklistApi);
        }

        // //Valida se existe algum id sem registro no REALM
        // const missingChecklistOffline = listCheckListApi.filter((item: ChecklistDTO) =>
        //     !listChecklists.find((checklistFind: ChecklistDTO) => checklistFind._id === item._id),
        // );

        // //Cria os registro no REALM
        // if (missingChecklistOffline.length > 0) {
        //     await createCheckListOffline(missingChecklistOffline);
        // }

        //Ordena os registros
        const listToCompareRealm = listChecklists.sort((a: any, b: any) => a._id - b._id);
        const listToCompareApi = listCheckListApi.sort((a: any, b: any) => a._id - b._id);

        //Comprar lista REALM com lista API
        const checklistToCompareFromOffline = returnOddObjectFromTwoArrays(
            listToCompareRealm,
            listToCompareApi,
        );

        //Comprar lista API com lista REALM
        const checklistToCompareFromApi = returnOddObjectFromTwoArrays(
            listToCompareApi,
            listToCompareRealm,
        );

        if (Object.keys(listToCompareRealm).length > 0) {
            //Filtar checklist que não existe mais no REALM e ainda consta na API
            const checklistDelete = listToCompareApi.filter((checklist: ChecklistDTO) =>
                !listToCompareRealm.find((checklistFind: ChecklistDTO) => checklistFind._id === checklist._id),
            );

            //Deleta checklist na API
            if (Object.keys(checklistDelete).length > 0) {
                await deleteCheckList(checklistDelete);
                const newListChecklists = await listCheckList();
                await updateCheckListOffline(newListChecklists)
            }
        }

        //Comprar data de atualização
        const checklistUpdate = checklistToCompareFromOffline.filter((checklist: ChecklistDTO) =>
            !checklistToCompareFromApi.find((checklistFind: ChecklistDTO) => checklistFind.updated_at === checklist.updated_at),
        );

        //Atualiza REALM ou API
        if (Object.keys(checklistUpdate).length > 0) {
            await updateCheckList(checklistUpdate);
            const newListChecklists = await listCheckList();
            await updateCheckListOffline(newListChecklists)
        }

        const checklist = await listCheckListOffline();

        return checklist;
    } catch (error: any) {
        throw new Error();
    }
}