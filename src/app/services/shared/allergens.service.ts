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
      isActive: true,
      name: 'Huevos',
      image: '../../assets/huevo.png'
    },
    {
      id: 2,
      isActive: true,
      name: 'Leche',
      image: '../../assets/leche.png'
    },
    {
      id: 3,
      isActive: true,
      name: 'Cacahuetes',
      image: '../../assets/cacahuete.png'
    },
    {
      id: 4,
      isActive: true,
      name: 'Frutos secos',
      image: '../../assets/frutos_secos.png'
    },
    {
      id: 5,
      isActive: true,
      name: 'Pescado',
      image: '../../assets/pescado.png'
    },
    {
      id: 6,
      isActive: true,
      name: 'Mariscos',
      image: '../../assets/marisco.png'
    },
    {
      id: 7,
      isActive: true,
      name: 'Gluten',
      image: '../../assets/gluten.png'
    },
    {
      id: 8,
      isActive: true,
      name: 'Soja',
      image: '../../assets/soja.png'
    },
    {
      id: 9,
      isActive: true,
      name: 'Crustaceos',
      image: '../../assets/crustaceo.png'
    }
  ];

  constructor() { }


  getAllergens(): Allergen[] {
    
    return this.allergens;
  }

}
