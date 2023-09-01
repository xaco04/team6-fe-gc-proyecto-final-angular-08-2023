import { Injectable } from '@angular/core';

export interface Allergen{

  id: number;
  isActive: boolean;
  name: string;
  image: string;
}

@Injectable({
  providedIn: 'root'
})
export class AllergensService {

  private allergens: Allergen[] = [
    {
      id: 1,
      isActive: false,
      name: 'Huevos',
      image: '../../assets/allergens/huevo.png'
    },
    {
      id: 2,
      isActive: false,
      name: 'Leche',
      image: '../../assets/allergens/leche.png'
    },
    {
      id: 3,
      isActive: false,
      name: 'Cacahuetes',
      image: '../../assets/allergens/cacahuete.png'
    },
    {
      id: 4,
      isActive: false,
      name: 'Frutos secos',
      image: '../../assets/allergens/frutos_secos.png'
    },
    {
      id: 5,
      isActive: false,
      name: 'Pescado',
      image: '../../assets/allergens/pescado.png'
    },
    {
      id: 6,
      isActive: false,
      name: 'Mariscos',
      image: '../../assets/allergens/marisco.png'
    },
    {
      id: 7,
      isActive: false,
      name: 'Gluten',
      image: '../../assets/allergens/gluten.png'
    },
    {
      id: 8,
      isActive: false,
      name: 'Soja',
      image: '../../assets/allergens/soja.png'
    },
    {
      id: 9,
      isActive: false,
      name: 'Crustaceos',
      image: '../../assets/allergens/crustaceo.png'
    }
  ];

  constructor() { }


  getAllergens(): Allergen[] {
    
    return this.allergens;
  }

}
