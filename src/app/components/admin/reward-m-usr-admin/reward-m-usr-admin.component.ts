
import { Component, Input, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/shared/users-shared.service';
import { RewardsService, Reward } from 'src/app/services/shared/rewards.service';


@Component({
  selector: 'app-reward-m-usr-admin',
  templateUrl: './reward-m-usr-admin.component.html',
  styleUrls: ['./reward-m-usr-admin.component.css']
})


export class RewardMUsrAdminComponent implements OnInit{

  users: any[] = []
  rewards: any[] = []

  constructor(private userService: UserService, private rewardsService: RewardsService ) {}

  ngOnInit(): void {
      this.users = this.userService.getUsers();
      this.rewards = this.rewardsService.getRewards();
  }
}





