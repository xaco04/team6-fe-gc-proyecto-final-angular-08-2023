import { Injectable } from '@angular/core';


export interface Reward{

  id: number,
  isActive: boolean,
  name: string,
  image: string,
  description: string,
  cost: number,
  discount: number,
  category: number
}

@Injectable({
  providedIn: 'root'
})
export class RewardsService {

  private rewards: Reward[] = [ 
    {
      id: 1,
      isActive: true,
      name: "BEBIDA",
      image: '../../assets/rewards/Bebidas.jpg',
      description: 'Descuento de 1 bebida',
      cost: 50,
      discount: 2,
      category: 5
    },  
    {
      id: 2,
      isActive: true,
      name: "POSTRE",
      image: '../../assets/rewards/Postres.jpeg',
      description: 'Descuento de 1 postre',
      cost: 80,
      discount: 2.8,
      category: 4
    },    
    {
      id: 3,
      isActive: true,
      name: "ENTRANTE",
      image: '../../assets/rewards/Entrantes.jpg',
      description: 'Descuento de 1 entrante',
      cost: 100,
      discount: 3.2,
      category: 3
    },  
    {
      id: 4,
      isActive: true,
      name: "PRIMERO",
      image: '../../assets/rewards/Primeros.jpeg',
      description: 'Descuento de 1 primero',
      cost: 120,
      discount: 3.5,
      category: 1
    },    
    {
      id: 5,
      isActive: true,
      name: "SEGUNDO",
      image: '../../assets/rewards/Segundos.jpg',
      description: 'Descuento de 1 segundo',
      cost: 200,
      discount: 4.2,
      category: 2
    },    
    {
      id: 6,
      isActive: true,
      name: "GENERAL",
      image: '../../assets/rewards/General.jpg',
      description: 'Descuento % total',
      cost: 250,
      discount: 5,
      category: 6
    }
  ];

  constructor() { }

  filterRewards(isActive: boolean): Reward[]{

    return this.rewards.filter(reward => reward.isActive === isActive);
  }

  getRewards(): Reward[]{

    return this.rewards;
  }
}