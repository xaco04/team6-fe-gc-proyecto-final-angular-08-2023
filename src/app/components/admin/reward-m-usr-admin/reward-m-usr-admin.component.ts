
import { Component, Input, OnInit } from '@angular/core';
import { UsersSharedService, User } from 'src/app/services/shared/users-shared.service';
import { RewardsSharedService, Premio } from 'src/app/services/shared/rewards-shared.service';


@Component({
  selector: 'app-reward-m-usr-admin',
  templateUrl: './reward-m-usr-admin.component.html',
  styleUrls: ['./reward-m-usr-admin.component.css']
})


export class RewardMUsrAdminComponent implements OnInit{

  user: User = {} as User;
  prices: any;
  
  constructor(private usersService: UsersSharedService, 
    private premiosService: RewardsSharedService) {}

  ngOnInit() {

    this.prices = this.premiosService.getPremios();

    // Obtener la información del usuario con id 1
    const user = this.usersService.getUserById(1);
    if (user !== undefined) {
      this.user = user;
    }
  }

}