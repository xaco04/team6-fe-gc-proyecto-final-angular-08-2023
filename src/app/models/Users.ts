import { Roles } from "./Roles";

export interface Users {

    id: number;
    name: string;
    surname: string;
    email: string;
    password: string;
    image: string;
    points: number;
    active: boolean;
    roleName: string;
    role: Roles;

}