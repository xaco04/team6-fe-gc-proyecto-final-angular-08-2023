import { Categories } from "./Categories";

export interface Rewards {

    id: number;
    name: string;
    description: string;
    cost: number;
    discount: number;
    image: string;
    active: boolean;
    category: Categories;

}