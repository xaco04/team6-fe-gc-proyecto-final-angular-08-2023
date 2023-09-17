import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from 'src/app/models/Users';




@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}

  endpoint: string = 'https://team6-fe-gc-proyecto-final-api-production.up.railway.app/';
  
  getAll(): Observable<Users[]> {
    
    return this.http.get<Users[]>(`${this.endpoint}users`);
  }

  // Devuelve todos los usuarios con un rol
  getAllByRoleName(rolename: string): Observable<Users[]> {

    return this.http.get<Users[]>(`${this.endpoint}users/role/${rolename}`);
  }
  // Devuelve un solo usuario por id
  getOneById(id: number): Observable<Users>{

    return this.http.get<Users>(`${this.endpoint}users/${id}`);
  }
  
  // Devuelve un solo usuario por email
  getOneByEmail(email: string) {
  
    return this.http.get<Users>(`${this.endpoint}users/email/${email}`);
  }

  // Devuelve un solo usuario por nombre
  getOneByName(name: string) {

    return this.http.get<Users>(`${this.endpoint}users/name/${name}`);
  }

  // Devuelve un solo usuario por nombre
  getOneBySurname(surname: string) {

    return this.http.get<Users>(`${this.endpoint}users/surname/${surname}`);
  }

  // === Post ===
  //Crea un nuevo usuario
  create(user : Users): Observable<Users>{

    return this.http.post<Users>(`${this.endpoint}users`, user);
  }

  // === Put ===
  // Edita un usuario
  update(id: number, user: Users): Observable<Users> {

    return this.http.put<Users>(`${this.endpoint}users/${id}`, user);
  }

  // === Delete ===
  // Borra usuario
  delete(id: number): Observable<Users> {
    
    return this.http.delete<Users>(`${this.endpoint}users/id/${id}`);
  }
}