
import { Category } from "./Category";
export interface Dishes {

    id: number;
    isActive: boolean;
    name: string;
    image: string;
    cost: number;
    description: string;
    isRecommended: boolean;
    isSuggested: boolean;
    isHighlighted: boolean;
    isAvailable: boolean;
    stock: number;
    category: Category;



}