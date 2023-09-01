import { Component, OnInit, Input } from '@angular/core';
import { UsersService, User } from '../services/users.service';
import { AllergensService, Allergen } from '../../../services/shared/allergens.service';
import { RewardsService, Reward } from '../../../services/shared/rewards.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  user: User = {} as User;
  @Input() allergens: Allergen[] = [];
  prices: any;
  
  constructor(private usersService: UsersService, 
    private allergensService: AllergensService,
    private premiosService: RewardsService) {}

  ngOnInit() {

    this.allergens = this.allergensService.getAllergens();
    this.prices = this.premiosService.getPremios();

    // Obtener la información del usuario con id 1
    const user = this.usersService.getUserById(1);
    if (user !== undefined) {
      this.user = user;
    }
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