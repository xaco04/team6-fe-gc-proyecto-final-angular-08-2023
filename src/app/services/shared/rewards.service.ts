import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RewardsService {

  private api_rewards: string = 'https://team6-fe-gc-proyecto-final-api-production.up.railway.app/rewards';

  constructor(private http: HttpClient) { }

  getAllRewards(){

    return this.http.get(this.api_rewards);
  }
}