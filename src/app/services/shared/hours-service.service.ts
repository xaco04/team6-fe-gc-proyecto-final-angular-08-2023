import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HoursServiceService {

  api_hours: string = 'http://localhost:5719/hours';

  constructor(private http: HttpClient) { }

  getAllHours(){
    
    return this.http.get(this.api_hours);
  }
}
