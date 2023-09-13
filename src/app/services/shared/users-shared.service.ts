import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8080/';



@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl: string = 'http://localhost:8080/users'; // Reemplaza con la URL de tu API de usuarios

  constructor(private http: HttpClient) {}

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }

  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'Usuario', { responseType: 'text' });
  }

  getEncargadoBoard(): Observable<any> {
    return this.http.get(API_URL + 'Encargado', { responseType: 'text' });
  }

  getCocineroBoard(): Observable<any> {
    return this.http.get(API_URL + 'Cocinero', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'Administrador', { responseType: 'text' });
  }

  getAllUsers() {
    return this.http.get(this.apiUrl);
  }


}
