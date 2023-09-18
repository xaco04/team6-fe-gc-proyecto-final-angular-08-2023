import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-reward',
  templateUrl: './reward.component.html',
  styleUrls: ['./reward.component.css']
})
export class RewardComponent {

  @Input() users_rewards: any;

  ngOnInit(){

    console.log(this.users_rewards);
  }
}
