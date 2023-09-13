import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DishesService {

  api_dishes: string = 'http://localhost:8080/dishes';

  constructor(private http: HttpClient){}

  getAllFirsts(){
    
    return this.http.get(this.api_dishes+'?category=1');
  }

  getAllSeconds(){
    
    return this.http.get(this.api_dishes+'?category=2');
  }
  
  getAllStarters(){
    
    return this.http.get(this.api_dishes+'?category=3');
  }

  getAllDesserts(){
    
    return this.http.get(this.api_dishes+'?category=4');
  }

  getAllDrinks(){
    
    return this.http.get(this.api_dishes+'?category=5');
  }

  getDishById(newId: number){

    return this.http.get(this.api_dishes+'/'+newId);
  }

  getIngredientsByDish(newId: number){

    return this.http.get(this.api_dishes+'/'+newId+'/ingredients');
  }

  getAllergensByDish(newId: number){

    return this.http.get(this.api_dishes+'/'+newId+'/allergens');
  }
}