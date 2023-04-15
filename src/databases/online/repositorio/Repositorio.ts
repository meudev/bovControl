import { ChecklistDTO } from "../../../dto/ChecklistDTO";

import api from "../../../services/api";

export async function listCheckList() {
    try {
        const response = await api.get('/checkList');

        const checklistsFormatted = response.data.map((checklist: ChecklistDTO) => {
            delete checklist.__v;
            return {
                ...checklist,
                _id: String(checklist._id),
                amount_of_milk_produced: Number(checklist.amount_of_milk_produced),
                number_of_cows_head: Number(checklist.number_of_cows_head),
            };
        });
        return checklistsFormatted;
    } catch (error: any) {
        throw new Error(error.message);
    }
}

export async function createCheckList(checklists: ChecklistDTO[]) {
    try {
        await api.post('/checkList', { checklists: checklists });
    } catch (error: any) {
        throw new Error(error.message);
    }
}

export async function deleteCheckList(checklists: ChecklistDTO[]) {
    try {
        checklists.map(async (checklist) => {
            await api.delete(`/checkList/${checklist._id}`);
        })
    } catch (error) {

    }
}

export async function updateCheckList(checklists: ChecklistDTO[]) {
    try {
        checklists.forEach(async (checklist: ChecklistDTO) => {
            const checklistFormated = {
                amount_of_milk_produced: checklist.amount_of_milk_produced,
                created_at: checklist.created_at,
                farmer: {
                    city: checklist.farmer.city,
                    name: checklist.farmer.name,
                },
                from: {
                    name: checklist.from.name,
                },
                had_supervision: checklist.had_supervision,
                location: {
                    latitude: checklist.location.latitude,
                    longitude: checklist.location.longitude,
                },
                number_of_cows_head: checklist.number_of_cows_head,
                to: {
                    name: checklist.to.name,
                },
                type: checklist.type,
                updated_at: checklist.updated_at,
            };
            await api.put(`/checkList/${checklist._id}`, checklistFormated);
        });
    } catch (error: any) {
        throw new Error(error.message);
    }
}