import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Users } from 'src/app/models/Users';
import { DishesService } from './dishes.service';


@Injectable({
  providedIn: 'root'
})
export class TokenStorageServiceService {

  TOKEN_KEY:string = 'auth-token';
  USER_KEY:string = 'auth-user';
  ROLE: string = 'auth-role';
  pedido: any;

  constructor(private jwtHelperService: JwtHelperService,
    private dishesService: DishesService) { }

  signOut(): void {
    window.sessionStorage.clear();
  }

  public saveToken(token: string): void {
    window.sessionStorage.removeItem(this.TOKEN_KEY);
    window.sessionStorage.setItem(this.TOKEN_KEY, token);

    if (token) {

      try {
        const decodedToken = this.jwtHelperService.decodeToken(token);

        window.sessionStorage.removeItem(this.USER_KEY);
        window.sessionStorage.setItem(this.USER_KEY, decodedToken.id);

        window.sessionStorage.removeItem(this.ROLE);
        window.sessionStorage.setItem(this.ROLE, decodedToken.role.name);

      } catch (error) {
        
        console.log(error);
      }
    }

  }
  
  public getToken(): string | null {
    return window.sessionStorage.getItem(this.TOKEN_KEY);

}

  public saveUser(users: any): void {
    window.sessionStorage.removeItem(this.USER_KEY);
    window.sessionStorage.setItem(this.USER_KEY, JSON.stringify(users));
  }

  public getUser(): any {
    return window.sessionStorage.getItem(this.USER_KEY);
  }

  public getRole(): any {
    return window.sessionStorage.getItem(this.ROLE);
  }

  public setDish(newId: number){

    this.pedido.setItem(this.dishesService.getDishById(newId))
  }

}
