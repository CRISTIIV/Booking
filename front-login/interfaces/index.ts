// Objective: Define the interfaces of the project

export interface IUser {
    id: string;
    name: string;
    last_name: string;
    email: string;
    password: string;
    City: string;
    reservation: Booking[];
}

export interface IInstitutation {
    name: string;
    category: string;
    admin: IUser;
    city: ICity;
}

export interface ICity {
    name: string;
}

export interface Zone {
    name: string;
    status: boolean;
    institutation: IInstitutation;
    description: string;
}

export interface ISpace {
    name: string;
    number: number;
    status: boolean;
    zone: Zone;
}

export interface Booking {
    date: Date;
    space: ISpace;
    user: IUser;
    status: boolean;
}

