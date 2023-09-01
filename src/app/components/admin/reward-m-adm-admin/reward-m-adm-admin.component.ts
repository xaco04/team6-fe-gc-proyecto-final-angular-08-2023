import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/shared/users-shared.service';
import { RewardsService, Reward } from 'src/app/services/shared/rewards.service';


@Component({
  selector: 'app-reward-m-adm-admin',
  templateUrl: './reward-m-adm-admin.component.html',
  styleUrls: ['./reward-m-adm-admin.component.css']
})
export class RewardMAdmAdminComponent implements OnInit {
  users: any[] = []
  rewards: any[] = []

  constructor(private userService: UserService, private rewardsService: RewardsService ) {}

  ngOnInit(): void {
      this.users = this.userService.getUsers();
      this.rewards = this.rewardsService.getRewards();
  }
}
