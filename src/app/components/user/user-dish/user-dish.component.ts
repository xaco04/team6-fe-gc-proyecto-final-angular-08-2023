import { Component, Input, OnInit } from '@angular/core';
import { DishesService } from 'src/app/services/shared/dishes.service';

@Component({
  selector: 'app-user-dish',
  templateUrl: './user-dish.component.html',
  styleUrls: ['./user-dish.component.css']
})
export class UserDishComponent{

  @Input() category: number =  0;

  @Input() isHome: boolean = false;

  @Input() dish: any
  @Input() index: number = 0;
  @Input() index_seconds: number = 0;
  @Input() responsiveness: boolean = false;

  showID(){

    console.log("Has pulsado en la ID "+this.dish.id);
  }
}
