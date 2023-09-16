import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from 'src/app/models/Users';




@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}

  endpoint: string = 'http://localhost:8080/';
  
  getAll(): Observable<Users[]> {
    
    return this.http.get<Users[]>(`${this.endpoint}users`);
  }

  // Devuelve todos los usuarios con un rol, ordenados alfabeticamente de forma Ascendente
  getAllByRoleNameAsc(rolename: string): Observable<Users[]> {

    return this.http.get<Users[]>(`${this.endpoint}users/role/${rolename}/name-asc`);
  }

  // Devuelve todos los usuarios con un rol que empiezan por X letras
  getAllByRoleStartingWith(rolename: string, letters: string): Observable<Users[]> {

    return this.http.get<Users[]>(`${this.endpoint}users/role/${rolename}/search/${letters}`);
  }

  // Devuelve un solo usuario por id
  getOneById(id: number): Observable<Users>{

    return this.http.get<Users>(`${this.endpoint}users/${id}`);
  }
  
  // Devuelve un solo usuario por email
  getOneByEmail(email: string) {
  
    return this.http.get<Users>(`${this.endpoint}users/email/${email}`);
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
    
    return this.http.delete<Users>(`${this.endpoint}users/${id}`);
  }
}