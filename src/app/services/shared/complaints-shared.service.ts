
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Complaints } from 'src/app/models/Complaints';

@Injectable({
  providedIn: 'root'
})
export class ComplaintsSharedService {

  constructor(private http: HttpClient) {}

  endpoint: string = 'https://team6-fe-gc-proyecto-final-api-production.up.railway.app/';

  getAll(): Observable<Complaints[]> {
    
    return this.http.get<Complaints[]>(`${this.endpoint}complaints`);
  }

  // Devuelve un solo reward por id
  getOneById(id: number): Observable<Complaints>{

    return this.http.get<Complaints>(`${this.endpoint}complaints/id/${id}`);
  }

    // === Put ===
  // Edita un reward
  update(id: number, user: Complaints): Observable<Complaints> {

    return this.http.put<Complaints>(`${this.endpoint}complaints/id/${id}`, id);
  }



}