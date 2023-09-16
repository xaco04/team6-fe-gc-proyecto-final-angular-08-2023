import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DishesService {

  private dishes: any;

  private api_dishes: string = 'http://localhost:8080/dishes';
  private firsts: string = '?category=1';
  private seconds: string = '?category=2';
  private starters: string = '?category=3';
  private desserts: string = '?category=4';
  private drinks: string = '?category=5';

  constructor(private http: HttpClient) { }

  getAll(){
    
    return this.http.get(this.api_dishes);
  }

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