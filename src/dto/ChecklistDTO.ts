import { FarmerDTO } from "./FarmerDTO";
import { PersonDTO } from "./PersonDTO";
import { LocationDTO } from "./LocationDTO";

export interface ChecklistDTO {
    _id: string;
    type: string;
    amount_of_milk_produced: number;
    farmer: FarmerDTO;
    from: PersonDTO;
    to: PersonDTO;
    number_of_cows_head: number;
    had_supervision: boolean;
    location: LocationDTO;
    created_at: string;
    updated_at: string;
    __v?: number;
}