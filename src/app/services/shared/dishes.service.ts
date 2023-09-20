import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Dishes } from 'src/app/models/Dishes';
import { Observable } from 'rxjs';

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

  getAllFirst(): Observable<Dishes[]> {
    return this.http.get<Dishes[]>(`${this.api_dishes}?category=1`);
  }
  

  getAllSeconds(){
    
    return this.http.get(this.api_dishes+'?category=2');
  }

  getAllSecond(): Observable<Dishes[]> {
    return this.http.get<Dishes[]>(`${this.api_dishes}?category=2`);
  }
  
  getAllStarters(){
    
    return this.http.get(this.api_dishes+'?category=3');
  }

  getAllStarter(): Observable<Dishes[]> {
    return this.http.get<Dishes[]>(`${this.api_dishes}?category=3`);
  }


  getAllDesserts(){
    
    return this.http.get(this.api_dishes+'?category=4');
  }

  getAllDessert(): Observable<Dishes[]> {
    return this.http.get<Dishes[]>(`${this.api_dishes}?category=4`);
  }

  getAllDrinks(){
    
    return this.http.get(this.api_dishes+'?category=5');
  }

  getAllDrink(): Observable<Dishes[]> {
    return this.http.get<Dishes[]>(`${this.api_dishes}?category=5`);
  }

  getDishById(newId: number){

    return this.http.get(this.api_dishes+'/'+newId);
  }

  getOneById(id: number): Observable<Dishes>{

    return this.http.get<Dishes>(`${this.api_dishes}/${id}`);
  }
  


  getIngredientsByDish(newId: number){

    return this.http.get(this.api_dishes+'/'+newId+'/ingredients');
  }

  getAllergensByDish(newId: number){

    return this.http.get(this.api_dishes+'/'+newId+'/allergens');
  }


  // === Post ===
  //Crea un nuevo usuario
  create(dish : Dishes): Observable<Dishes>{

    return this.http.post<Dishes>(`${this.api_dishes}`, dish);
  }


    // === Delete ===
  // Borra usuario
  delete(id: number): Observable<Dishes> {
    return this.http.delete<Dishes>(`${this.api_dishes}/id/${id}`);
  }

    // === Put ===
  // Edita un usuario
  update(id: number, dishes: Dishes): Observable<Dishes> {

    return this.http.put<Dishes>(`${this.api_dishes}/${id}`, dishes);
  }

}