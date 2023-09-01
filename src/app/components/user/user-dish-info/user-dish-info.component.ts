import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-dish-info',
  templateUrl: './user-dish-info.component.html',
  styleUrls: ['./user-dish-info.component.css']
})
export class UserDishInfoComponent {

  @Input() dish: any;
  @Input() index: number = 0;
}
