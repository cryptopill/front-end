import { Medicine } from './medicine';

export class Patient {
    address: string;
    name: string;
    num_prescriptions: number;
    medicines: Medicine [];
}