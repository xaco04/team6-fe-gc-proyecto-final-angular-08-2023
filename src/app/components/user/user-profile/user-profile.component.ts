import { Component, OnInit, Input } from '@angular/core';
import { AllergensService } from '../../../services/shared/allergens.service';
import { RewardsService, Reward } from '../../../services/shared/rewards.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  allergens: any;
  rewards: any;
  
  constructor(private allergensService: AllergensService,
    private rewardsService: RewardsService) {}

  ngOnInit() {

    this.rewards = this.rewardsService.getRewards();
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
}