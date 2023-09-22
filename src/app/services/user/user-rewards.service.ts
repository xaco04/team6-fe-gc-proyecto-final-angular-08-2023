import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserRewardsService {

  // private api_user_rewards: string = 'https://team6-fe-gc-proyecto-final-api-production.up.railway.app/users_rewards/';
  private api_user_rewards: string = 'https://team6-fe-gc-proyecto-final-api-production.up.railway.app/users_rewards/';

  constructor(private http: HttpClient) { }

  getAllRewardsByUser(id_user: number){
    
    return this.http.get(this.api_user_rewards+'user/'+(id_user));
  }

  changeIsAvailable(newId: number, newAvailability: boolean) {

    const url = `${this.api_user_rewards}updateAvailability/${newId}?isAvailable=${newAvailability}`;
    
    return this.http.put(url, {});
  }
}
