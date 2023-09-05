import { Injectable } from '@angular/core';

export interface Dish{

  id: number;
  isActive: boolean;
  name: string;
  image: string;
  cost: number;
  description: string;
  isRecommended: boolean;
  isSuggested: boolean;
  isHighlighted: boolean;
  stock: null;
  isAvailable: boolean;
  category: number;
}

@Injectable({
  providedIn: 'root'
})
export class DishesService {

private dishes: Dish[] = [
  {
    id: 1,
    isActive: true,
    name: 'Ensalada César',
    image: '../../assets/ensalada_cesar.jpg',
    cost: 10.00,
    description: 'Ensalada con lechuga, pollo, pan rallado, queso parmesano y salsa César',
    isRecommended: true,
    isSuggested: false,
    isHighlighted: false,
    stock: null,
    isAvailable: true,
    category: 1
  },
  {
    id: 2,
    isActive: true,
    name: 'Sopa de tomate',
    image: '../../assets/sopa_tomate.jpg',
    cost: 8.00,
    description: 'Sopa de tomate con caldo de pollo, cebolla, ajo y aceite de oliva',
    isRecommended: false,
    isSuggested: true,
    isHighlighted: true,
    stock: null,
    isAvailable: true,
    category: 1
  },
  {
    id: 3,
    isActive: true,
    name: 'Tortilla española',
    image: '../../assets/tortilla_patatas.jpeg',
    cost: 9.00,
    description:'Tortilla de patatas con huevos, cebolla y aceite de oliva',
    isRecommended: false,
    isSuggested: false,
    isHighlighted: false,
    stock: null,
    isAvailable: true,
    category: 1
  },
  {
    id: 4,
    isActive: true,
    name: 'Gazpacho',
    image: '../../assets/gazpacho.jpg',
    cost: 7.50,
    description: 'Gazpacho con tomate, pepino, pimiento verde, cebolla, ajo y vinagre de vino blanco',
    isRecommended: false,
    isSuggested: false,
    isHighlighted: false,
    stock: null,
    isAvailable: true,
    category: 1
  },
  {
    id: 5,
    isActive: true,
    name: 'Pollo al curry',
    image: '../../assets/pollo_curry.jpg',
    cost: 12.00,
    description: 'Pollo al curry con curry en polvo, leche de coco, cebolla y arroz basmati',
    isRecommended: true,
    isSuggested: false,
    isHighlighted: false,
    stock: null,
    isAvailable: true,
    category: 2
  },
  {
    id: 6,
    isActive: true,
    name: 'Lomo de cerdo con salsa de manzana',
    image: '../../assets/lomo_cerdo.jpg',
    cost: 14.00,
    description: 'Lomo de cerdo con salsa de manzanas verdes, caldo de pollo y vino blanco',
    isRecommended: false,
    isSuggested: false,
    isHighlighted: false,
    stock: null,
    isAvailable: true,
    category: 2
  },
  {
    id: 7,
    isActive: true,
    name:'Pescado a la plancha con verduras',
    image:'../../assets/pescado_plancha.png',
    cost :13.50,
    description:'Filete de pescado blanco a la plancha con calabacín, berenjena y pimiento rojo',
    isRecommended:false,
    isSuggested:true,
    isHighlighted:false,
    stock: null,
    isAvailable:true,
    category :2
  },
  {
    id: 8,
    isActive:true,
    name:'Lasagna boloñesa',
    image:'../../assets/lasana_bolonesa.jpg',
    cost: 11.00,
    description:'Lasagna boloñesa con pasta para lasagna, carne picada de ternera, tomate frito casero y queso rallado',
    isRecommended:false,
    isSuggested:false,
    isHighlighted:true,
    stock: null,
    isAvailable: true,
    category :2
  },
  {
    id: 9,
    isActive:true,
    name:'Agua mineral',
    image:'../../assets/agua.jpg',
    cost:1.50,
    description:'Agua mineral',
    isRecommended:true,
    isSuggested:true,
    isHighlighted:false,
    stock:null,
    isAvailable:true,
    category:3
  },
  {
    id: 10,
    isActive:true,
    name:'Vino tinto',
    image:'../../assets/vino_tinto.jpg',
    cost:3.00,
    description:'Vino tinto',
    isRecommended:false,
    isSuggested:false,
    isHighlighted:false,
    stock:null,
    isAvailable:true,
    category:3
  },
  {
    id: 11,
    isActive:true,
    name:'Cerveza',
    image:'../../assets/cerveza.jpeg',
    cost:2.50,
    description:'Cerveza',
    isRecommended:false,
    isSuggested:false,
    isHighlighted:false,
    stock:null,
    isAvailable:true,
    category:3},
  {
    id: 12,
    isActive:true,
    name:'Zumo de naranja natural',
    image:'../../assets/zumo_naranja.jpg',
    cost:2.00,
    description:'Zumo de naranja natural',
    isRecommended:false,
    isSuggested:false,
    isHighlighted:true,
    stock:null,
    isAvailable:true,
    category:3
  },
  {
    id: 13,
    isActive: true,
    name: 'Tarta de queso',
    image: '../../assets/tarta_queso.jpg',
    cost: 4.50,
    description:'Tarta de queso con queso crema, galletas, mantequilla, azúcar y nata para montar',
    isRecommended:true,
    isSuggested:false,
    isHighlighted:false,
    stock:null,
    isAvailable:true,
    category:4
  },
  {
    id: 14,
    isActive: true,
    name: 'Helado de vainilla con salsa de chocolate',
    image: '../../assets/helado_vainilla.jpg',
    cost: 3.50,
    description: 'Helado de vainilla con salsa de chocolate negro',
    isRecommended: false,
    isSuggested: false,
    isHighlighted: true,
    stock: null,
    isAvailable: true,
    category: 4
  },
  {
    id: 15,
    isActive:true,
    name:'Mousse de limón',
    image:'../../assets/mousse_limon.jpeg',
    cost:3.00,
    description:'Mousse de limón con limones, azúcar, nata para montar y leche condensada',
    isRecommended:false,
    isSuggested:false,
    isHighlighted:false,
    stock:null,
    isAvailable:true,
    category:4
  },
  {
    id: 16,
    isActive:true,
    name:'Brownie con helado de vainilla',
    image:'../../assets/brownie_vainilla.jpg',
    cost:4.00,
    description:'Brownie con chocolate negro, mantequilla, azúcar moreno, huevos, harina y levadura en polvo con helado de vainilla',
    isRecommended:false,
    isSuggested:true,
    isHighlighted:false,
    stock:null,
    isAvailable:true,
    category: 4
  },
  {
    id: 17,
    isActive:true,
    name:'Patatas bravas',
    image:'../../assets/patatas_bravas.jpg',
    cost:3.50,
    description:'Patatas bravas con aceite de oliva y salsa brava',
    isRecommended:true,
    isSuggested:false,
    isHighlighted:false,
    stock:null,
    isAvailable:true,
    category: 5
  },
  {
    id: 18,
    isActive:true,
    name:'Croquetas de jamón',
    image:'../../assets/croquetas.jpg',
    cost:4.00,
    description:'Croquetas de jamón serrano con leche, harina, mantequilla y pan rallado',
    isRecommended:false,
    isSuggested:false,
    isHighlighted:true,
    stock:null,
    isAvailable:true,
    category: 5
  },
  {
    id: 19,
    isActive:true,
    name:'Empanadas de atún',
    image:'../../assets/empanada_atun.jpg',
    cost:3.50,
    description:'Empanadas de atún en aceite con tomate frito casero y huevo duro',
    isRecommended:false,
    isSuggested:false,
    isHighlighted:false,
    stock:null,
    isAvailable:true,
    category: 5
  },
  {
    id: 20,
    isActive:true,
    name:'Hummus con crudités',
    image:'../../assets/hummus.jpg',
    cost:3.00,
    description:'Hummus con garbanzos cocidos, tahini, limón y aceite de oliva con crudités de zanahorias y pepino',
    isRecommended:false,
    isSuggested:true,
    isHighlighted:false,
    stock:null,
    isAvailable:true,
    category: 5
  }
];

constructor() { }

filterDishes(category: number): Dish[]{

  return this.dishes.filter(dish => dish.category === category);
}

filterRecommended(): Dish[]{

  return this.dishes.filter(dish => dish.isRecommended === true);
}

filterSuggested(): Dish[]{

  return this.dishes.filter(dish => dish.isSuggested === true);
}

filterHighlighted(): Dish[]{

  return this.dishes.filter(dish => dish.isHighlighted === true);
}
}
