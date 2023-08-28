
import { Component, Input, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/shared/users-shared.service';
import { RewardsSharedService, Premio } from 'src/app/services/shared/rewards-shared.service';


@Component({
  selector: 'app-reward-m-usr-admin',
  templateUrl: './reward-m-usr-admin.component.html',
  styleUrls: ['./reward-m-usr-admin.component.css']
})


export class RewardMUsrAdminComponent implements OnInit{

  users: any[] = []

  constructor(private userService: UserService) {}

  ngOnInit(): void {
      this.users = this.userService.getUsers();
  }
}




