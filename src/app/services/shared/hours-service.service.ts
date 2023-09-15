import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HoursServiceService {

  api_hours: string = 'team6-fe-gc-proyecto-final-api-production.up.railway.app/hours';

  constructor(private http: HttpClient) { }

  getAllHours(){
    
    return this.http.get(this.api_hours);
  }
}
