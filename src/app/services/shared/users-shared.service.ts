import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: any[] = [
    { id: 1, 
      isActive: 'Active', 
      name: 'Administrador', 
      surname: 'Administrador', 
      username: 'admin',
      password: 'admin',
      image: '../../../../assets/avatar.png',
      points: 50,
      role: 'admin',
},

{ id: 1, 
  isActive: 'Active', 
  name: 'Xavier Jordi', 
  surname: 'Vico', 
  username: 'xavi04',
  password: '1234',
  image: '../../../../assets/avatar.png' ,
  points: 50,
  role: 'user',
},

{ id: 1, 
  isActive: 'Active', 
  name: 'Roberto', 
  surname: 'Carrera', 
  username: 'RCarrera',
  password: '1234',
  image: '../../../../assets/avatar.png',
  points: 50,
  role: 'user',
},

{ id: 1, 
  isActive: 'Active', 
  name: 'Joan', 
  surname: 'de la Huerta Planas', 
  username: 'xavi04',
  password: '1234',
  image: '../../../../assets/avatar.png',
  points: 50,
  role: 'user',
},


  ];

  getUsers(): any[] {
    return this.users;
  }
}
