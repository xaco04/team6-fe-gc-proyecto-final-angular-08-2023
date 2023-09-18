import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/shared/users-shared.service';
import { RewardsService } from 'src/app/services/shared/rewards.service';
import { Rewards } from 'src/app/models/Rewards'; // Importa el modelo Rewards

@Component({
  selector: 'app-reward-m-adm-admin',
  templateUrl: './reward-m-adm-admin.component.html',
  styleUrls: ['./reward-m-adm-admin.component.css']
})
export class RewardMAdmAdminComponent implements OnInit {
  users: any[] = []
  rewards: Rewards[] = []; // Cambia el tipo de datos aquí

  constructor(private userService: UserService, private rewardsService: RewardsService) {}

  ngOnInit(): void {
      // this.users = this.userService.getUsers();
      this.rewardsService.getAll().subscribe((data: Rewards[]) => {
        this.rewards = data; // Asigna los datos obtenidos del servicio a la propiedad rewards
      });
  }
}
