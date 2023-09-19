import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAllergensService {

  // private api_users_allergens: string = 'https://team6-fe-gc-proyecto-final-api-production.up.railway.app/users_allergens';
  private api_users_allergens: string = 'http://localhost:8080/users_allergens/';

  constructor(private http: HttpClient) { }

  getAllAllergensByUser(id_user: number){
    
    return this.http.get(this.api_users_allergens+'user/'+id_user);
    
  }

  getAllergieByUserId(id_user: number, id_allergen: number){

    return this.http.get(this.api_users_allergens+'user/'+id_user+'/allergen/'+id_allergen);
  }

  changeAllergie(user_id: number, allergen_id: number, isAllergic: boolean){

    return this.http.put(`${this.api_users_allergens}user/${user_id}/allergen/${allergen_id}?isAllergic=${isAllergic}`, null);
  }
}
