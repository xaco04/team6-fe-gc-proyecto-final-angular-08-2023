import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AllergensService {

  api_allergens: string = 'http://localhost:5719/allergens';

  constructor(private http: HttpClient) { }

  getAllAllergens(){
    
    return this.http.get(this.api_allergens);
  }
}