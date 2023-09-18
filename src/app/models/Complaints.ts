import { Users } from "./Users";

export interface Complaints {
    id: number;
    message: string;
    dateSend: string;
    sender: Users

}