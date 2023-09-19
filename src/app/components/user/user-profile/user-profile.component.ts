import { Component, OnInit, Input } from '@angular/core';
import { UserRewardsService } from '../../../services/user/user-rewards.service';
import { TokenStorageServiceService} from 'src/app/services/shared/token-storage-service.service';
import { UserService } from 'src/app/services/shared/users-shared.service';
import { UserAllergensService } from 'src/app/services/user/user-allergens.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  allergens: any;
  user_rewards: any;
  user_id: number = 0;
  user: any;
  user_level: number = 0;
  user_points_next_level: number = 0;
  percent_level: number = 0;
  
  constructor(
    private userAllergensService: UserAllergensService,
    private userRewardsService: UserRewardsService,
    private tokenStorage: TokenStorageServiceService,
    private userService: UserService) {}

  ngOnInit() {
    
    this.user_id = this.tokenStorage.getUser();
    this.getThisUser(this.user_id);
    this. getAllRewards(this.user_id);
    this.setAllergies(this.user_id);
    
    this.user_id = this.tokenStorage.getUser();

  }

  getThisUser(user_id: number){

    this.userService.getOneById(user_id).subscribe(result => {

      this.user = result;
    });
  }

  getAllRewards(user_id: number){

    this.userRewardsService.getAllRewardsByUser(user_id).subscribe(result =>{

      this.user_rewards = result;
      this.setAvailableRewards();
      this.calculateLevel();
    })
  }

  setAllergies(user_id: number){

    this.userAllergensService.getAllAllergensByUser(user_id).subscribe(result => {

      this.allergens = result;
    });
  }

  activateAllergen(allergen_id: number, isAllergic: boolean){

    if(isAllergic == true){

      this.userAllergensService.changeAllergie(this.user_id, allergen_id, false).subscribe(result => {
      });
    }else{

      this.userAllergensService.changeAllergie(this.user_id, allergen_id, true).subscribe(result => {
      });
    }
  }

  setAvailableRewards(){

    for(let i = 0; i < this.user_rewards.length; i++){

      if(this.user.points > this.user_rewards[i].idRewards.cost){

        if(this.user_rewards[i].isAvailable == false){

          this.userRewardsService.changeIsAvailable(this.user_rewards[i].id, true).subscribe(result => {
          },
          error => {

          });
        }
      }
    }
  }

  calculateLevel(){

    let i = 0;
    let max_levels = this.user_rewards.length-1;

    do{
      
      if(i == max_levels)
      {

        this.user_level = this.user_rewards[max_levels].idRewards.id;
        this.user_points_next_level = 0;
      }else{

        this.user_level = this.user_rewards[i].idRewards.id;
        this.user_points_next_level = (this.user_rewards[i+1].idRewards.cost-this.user.points);
      }
      i++;
    }while(this.user.points < max_levels);

    this.percent_level = (this.user.points/this.user_rewards[this.user_level].idRewards.cost)*100;
  }
}