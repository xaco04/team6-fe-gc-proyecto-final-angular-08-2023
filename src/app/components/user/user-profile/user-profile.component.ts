import { Component, OnInit, Input } from '@angular/core';
import { AllergensService, Allergen } from '../../../services/shared/allergens.service';
import { RewardsService, Reward } from '../../../services/shared/rewards.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  @Input() allergens: Allergen[] = [];
  rewards: any;
  
  constructor(private allergensService: AllergensService,
    private rewardsService: RewardsService) {}

  ngOnInit() {

    this.allergens = this.allergensService.getAllergens();
    this.rewards = this.rewardsService.getRewards();
  }

  activateAllergen(allergen: Allergen){

    if(allergen.isActive == true){

      allergen.isActive = false;
    }
    else{
      
      allergen.isActive = true;
    }
  }

}