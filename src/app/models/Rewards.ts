import { Category } from "./Category";

export interface Rewards {

    id: number;
    name: string;
    description: string;
    cost: number;
    discount: number;
    image: string;
    active: boolean;
    category: Category;

}