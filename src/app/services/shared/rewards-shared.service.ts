import { Injectable } from '@angular/core';


export interface Premio{

  nombre: string,
  activado: boolean,
  imagen: string,
  tipo: string,
  descripcion: string,
  puntos_necesarios: number,
  descuento: number,
}

@Injectable({
  providedIn: 'root'
})
export class RewardsSharedService {

  private premios: Premio[] = [ 
    {
      nombre: "BEBIDA",
      activado: true,
      imagen: '../../assets/agua.jpg',
      tipo: 'bebida',
      descripcion: 'Descuento de 1 bebida',
      puntos_necesarios: 50,
      descuento: 2,
    },  
    {
      nombre: "POSTRE",
      activado: true,
      imagen: '../../assets/cerveza.jpeg',
      tipo: 'postre',
      descripcion: 'Descuento de 1 postre',
      puntos_necesarios: 80,
      descuento: 2.8,
    },    
    {
      nombre: "ENTRANTE",
      activado: true,
      imagen: '../../assets/agua.jpg',
      tipo: 'entrante',
      descripcion: 'Descuento de 1 entrante',
      puntos_necesarios: 100,
      descuento: 3.2,
    },  
    {
      nombre: "PRIMERO",
      activado: true,
      imagen: '../../assets/agua.jpg',
      tipo: 'primero',
      descripcion: 'Descuento de 1 primero',
      puntos_necesarios: 120,
      descuento: 3.5,
    },    
    {
      nombre: "SEGUNDO",
      activado: false,
      imagen: '../../assets/agua.jpg',
      tipo: 'segundo',
      descripcion: 'Descuento de 1 segundo',
      puntos_necesarios: 200,
      descuento: 4.2,
    }
  ];

  constructor() { }

  filtrarPremios(activado: boolean): Premio[]{

    return this.premios.filter(premio => premio.activado === activado);
  }

  getPremios(): Premio[]{

    return this.premios;
  }
}