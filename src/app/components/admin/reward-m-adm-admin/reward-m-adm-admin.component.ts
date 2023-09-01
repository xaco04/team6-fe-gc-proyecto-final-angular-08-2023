import { Component, OnInit } from '@angular/core';
import { RewardsSharedService } from 'src/app/services/shared/rewards-shared.service';
import { UserService } from 'src/app/services/shared/users-shared.service';

@Component({
  selector: 'app-reward-m-adm-admin',
  templateUrl: './reward-m-adm-admin.component.html',
  styleUrls: ['./reward-m-adm-admin.component.css']
})
export class RewardMAdmAdminComponent implements OnInit {
  users: any[] = []
  premios: any[] = []

  constructor(private userService: UserService, private rewardsSharedService: RewardsSharedService ) {}

  ngOnInit(): void {
      this.users = this.userService.getUsers();
      this.premios = this.rewardsSharedService.getPremios();
  }
}