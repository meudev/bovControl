import { getRealm } from '../realm';
import { ChecklistDTO } from '../../../dto/ChecklistDTO';

export async function createCheckList(checklists: ChecklistDTO[]) {
    try {
        const realm = await getRealm();
        checklists.forEach((checklist: ChecklistDTO) => {
            realm.write(() => {
                realm.create('CheckList', checklist);
            });
        });
    } catch (error: any) {
        throw new Error(error);
    }
}

export async function listCheckList() {
    try {
        const realm = await getRealm();

        const checklist: any = realm.objects('CheckList');
        return checklist;
    } catch (error: any) {
        throw new Error(error);
    }
}

export async function updateCheckList(checklists: ChecklistDTO[]) {
    try {
        const realm = await getRealm();

        checklists.forEach((checklist: ChecklistDTO) => {
            realm.write(() => {
                const checklistUpdate: any = realm.objectForPrimaryKey(
                    'CheckList',
                    checklist._id,
                );

                checklistUpdate.amount_of_milk_produced = checklist.amount_of_milk_produced;
                checklistUpdate._id = checklist._id;
                checklistUpdate.number_of_cows_head = checklist.number_of_cows_head;
                checklistUpdate.farmer.name = checklist.farmer.name;
                checklistUpdate.farmer.city = checklist.farmer.city;
                checklistUpdate.from.name = checklist.from.name;
                checklistUpdate.to.name = checklist.to.name;
                checklistUpdate.had_supervision = checklist.had_supervision;
                checklistUpdate.location.latitude = checklist.location.latitude;
                checklistUpdate.location.longitude = checklist.location.longitude;
                checklistUpdate.created_at = checklist.created_at;
                checklistUpdate.updated_at = checklist.updated_at;
            });
        });
    } catch (error: any) {
        throw new Error(error);
    }
}

export async function deleteChecklist(checklist: ChecklistDTO) {
    try {
        const realm = await getRealm();

        const checklistsDelete = realm
            .objects('CheckList')
            .filtered('_id = $0', checklist._id);

        realm.write(() => {
            realm.delete(checklistsDelete);
        });
    } catch (error: any) {
        throw new Error(error);
    }
}