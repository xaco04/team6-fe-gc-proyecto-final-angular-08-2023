import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AllergensService {

  api_allergens: string = 'team6-fe-gc-proyecto-final-api-production.up.railway.app/allergens';

  constructor(private http: HttpClient) { }

  getAllAllergens(){
    
    return this.http.get(this.api_allergens);
  }
}