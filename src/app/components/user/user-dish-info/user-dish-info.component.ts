import { Component, Input, OnInit } from '@angular/core';
import { DishesService } from 'src/app/services/shared/dishes.service';

@Component({
  selector: 'app-user-dish-info',
  templateUrl: './user-dish-info.component.html',
  styleUrls: ['./user-dish-info.component.css']
})
export class UserDishInfoComponent implements OnInit{

  @Input() id: number = 0;
  @Input() dish: any;
  @Input() index: number = 0;
  @Input() dish_id: number = 0;

  ingredients: any;
  allergens: any;

  constructor(private dishesService: DishesService){}

  ngOnInit(): void {
      
    // this.dishesService.getDishById(this.dish_id).subscribe(result => {

    //   this.dish = result;
    // })

    // this.dishesService.getIngredientsByDish(this.dish_id).subscribe(result => {

    //   this.ingredients = result;
    // })

    // this.dishesService.getAllergensByDish(this.dish_id).subscribe(result => {

    //   this.allergens = result;
    // })
  }
}
