import { Component, OnInit, Input } from '@angular/core';
import { AllergensService } from '../../../services/shared/allergens.service';
import { UserRewardsService } from '../../../services/user/user-rewards.service';
import { TokenStorageServiceService} from 'src/app/services/shared/token-storage-service.service';
import { UserService } from 'src/app/services/shared/users-shared.service';

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
  user_next_level: number = 0;
  user_points_next_level: number = 0;
  
  constructor(
    private allergensService: AllergensService,
    private userRewardsService: UserRewardsService,
    private tokenStorage: TokenStorageServiceService,
    private userService: UserService) {}

  ngOnInit() {
    
    this.user_id = this.tokenStorage.getUser();
    this.userService.getOneById(this.user_id).subscribe(result => {

      this.user = result;
    });
    this.userRewardsService.getAllRewardsByUser(this.user_id).subscribe(result =>{

      this.user_rewards = result;
      this.setAvailableRewards();
    })
    // this.nextLevelReward();
    
    this.allergensService.getAllAllergens().subscribe(result => {

      this.allergens = result;
    });
  }

  activateAllergen(allergen: any){

    if(allergen.isActive == true){

      allergen.isActive = false;
    }
    else{
      
      allergen.isActive = true;
    }
  }

  setAvailableRewards(){

    for(let i = 0; i < this.user_rewards.length; i++){

      if(this.user.points > this.user_rewards[i].idRewards.cost){

        console.log(this.user_rewards[i]);
        this.userRewardsService.changeIsAvailable(this.user_rewards[i].id, true).subscribe(result => {

          console.log("Disponibilidad actualizada correctamente");
        },
        error => {

          console.error("Error al actualizar la disponibilidad");
        });
      }
    }
  }

  // nextLevelReward(): void{

  //   for(let i = 0; i < this.rewards.length; i++)
  //   {
  //     if(i == this.rewards.length-1){

  //       this.user_level = this.rewards[this.rewards.lenght].id;
  //       this.user_next_level = this.rewards[this.rewards.lenght].id;
  //       this.user_points_next_level = 0;
  //     }else{
  //       if(this.user.points > this.rewards[i].cost){

  //         this.user_level = this.rewards[i].id;
  //         this.user_next_level = this.rewards[i+1].cost-this.user.points;
  //         this.user_points_next_level = this.rewards[i+1].points;
  //         break;
  //       }
  //     }
  //   }
  // }
}