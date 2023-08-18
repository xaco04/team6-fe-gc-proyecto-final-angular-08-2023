import { Injectable } from '@angular/core';


export interface User{

  id: number,
  nombre: string,
  apellido: string,
  activado: boolean,
  rol: string,
  puntos: number
}

@Injectable({
  providedIn: 'root'
})

export class UsersSharedService {

  private users: User[] = [
    {
      id: 1,
      nombre: 'Roberto',
      apellido: 'Carrera',
      activado: true,
      rol: 'usuario',
      puntos: 52
    },
    {
      id: 1,
      nombre: 'Miguel',
      apellido: 'Maldonado',
      activado: false,
      rol: 'usuario',
      puntos: 22
    }
  ];

  constructor() { }
  
  getUserById(id: number): User | undefined{

    return this.users.find(user => user.id === id);
  }
  
}