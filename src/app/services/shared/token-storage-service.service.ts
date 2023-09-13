import { Injectable } from '@angular/core';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageServiceService {

  constructor() { }

  signOut(): void {
    window.sessionStorage.clear();
  }

  public saveToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string | null {
    return window.sessionStorage.getItem(TOKEN_KEY);
  }

  public saveUser(users: any): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(users));
  }

  public getUsers(): any {
    let saludo: string = "no";
    const users = window.sessionStorage.getItem(USER_KEY);
    if (users) {
      console.log("Se han encontrado datos");
      return JSON.parse(users);
    } else {
      console.log("No se encontraron datos de usuario en la sesión de almacenamiento.");
      return null; // Otra opción es devolver null si no se encuentran datos en sessionStorage
    }
  }

}
