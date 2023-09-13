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

    // if (token) {

    //   try {
    //     const decodedToken = this.jwtHelperService.decodeToken(token);

    //     window.sessionStorage.removeItem(this.USER_KEY);
    //     window.sessionStorage.setItem(this.USER_ID, decodedToken.user_id);

    //     window.sessionStorage.removeItem(this.ROLE);
    //     window.sessionStorage.setItem(this.ROLE, decodedToken.role.name);

    //   } catch (error) {
        
    //     console.log(error);
    //   }
    // }

  }
  
  public getToken(): string | null {
    const token = window.sessionStorage.getItem(TOKEN_KEY);
    console.log('Recuperando token:', token);
    return token;
}

  public saveUser(users: any): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(users));
  }

  public getUsers(): any {
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
