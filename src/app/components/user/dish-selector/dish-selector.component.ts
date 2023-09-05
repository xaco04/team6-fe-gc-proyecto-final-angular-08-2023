import { Component, Input } from '@angular/core';
import { DishesService, Dish } from '../../../services/shared/dishes.service';

@Component({
  selector: 'app-dish-selector',
  templateUrl: './dish-selector.component.html',
  styleUrls: ['./dish-selector.component.css']
})
export class DishSelectorComponent {

  @Input() category: number = 0;

  @Input() small_dish: boolean = false;
  @Input() isHome: boolean = false;
  @Input() recommended: boolean = false;
  @Input() suggested: boolean = false;
  @Input() highlighted: boolean = false;
  
  @Input() dishes: Dish[] = [];
  @Input() recommended_dishes: Dish[] = [];
  @Input() suggested_dishes: Dish[] = [];
  @Input() highlighted_dishes: Dish[] = [];

  constructor(private dishesService: DishesService){}

  ngOnInit() {

    this.dishes = this.dishesService.filterDishes(this.category)

    if(this.recommended){

      this.recommended_dishes = this.dishesService.filterRecommended();
    }else{
      if(this.suggested){

        this.suggested_dishes = this.dishesService.filterSuggested();
      }else{
        if(this.highlighted){

          this.highlighted_dishes = this.dishesService.filterHighlighted();
        }
      }
    }
  }
}