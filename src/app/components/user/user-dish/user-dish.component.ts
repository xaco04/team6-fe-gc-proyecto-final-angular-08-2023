import { Component, Input, OnInit, Output } from '@angular/core';
import { DishesService } from 'src/app/services/shared/dishes.service';

@Component({
  selector: 'app-user-dish',
  templateUrl: './user-dish.component.html',
  styleUrls: ['./user-dish.component.css']
})
export class UserDishComponent implements OnInit{

  @Input() category: number =  0;

  @Input() isHome: boolean = false;

  @Input() dish: any
  @Input() index: number = 0;
  @Input() index_seconds: number = 0;
  @Input() responsiveness: boolean = false;
  ingredients: any;

  constructor(private dishesService: DishesService){}

  ngOnInit(): void {
      
    this.dishesService.getIngredientsByDish(this.dish.id).subscribe(result => {

      this.ingredients = result;
    })
  }

  addDish(dishID: number){}
}