import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rewards } from 'src/app/models/Rewards';

@Injectable({
  providedIn: 'root'
})

export class RewardsService {

  constructor(private http: HttpClient) {}

  endpoint: string = 'https://team6-fe-gc-proyecto-final-api-production.up.railway.app/';

  getAll(): Observable<Rewards[]> {
    
    return this.http.get<Rewards[]>(`${this.endpoint}rewards`);
  }

  // Devuelve un solo reward por id
  getOneById(id: number): Observable<Rewards>{

    return this.http.get<Rewards>(`${this.endpoint}users/id/${id}`);
  }

    // === Put ===
  // Edita un reward
  update(id: number, user: Rewards): Observable<Rewards> {

    return this.http.put<Rewards>(`${this.endpoint}rewards/${id}`, user);
  }



}