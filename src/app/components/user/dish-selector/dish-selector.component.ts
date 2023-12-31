import { Component, Input, OnInit } from '@angular/core';
import { DishesService} from '../../../services/shared/dishes.service';

@Component({
  selector: 'app-dish-selector',
  templateUrl: './dish-selector.component.html',
  styleUrls: ['./dish-selector.component.css']
})
export class DishSelectorComponent implements OnInit{

  @Input() category: number = 0;
  @Input() isHome: boolean = false;
  @Input() small_dish: boolean = false;
  @Input() responsiveness: boolean = false;

  @Input() responsive_dish: any;

  firsts: any = [];
  seconds: any = [];
  starters: any = [];
  desserts: any = [];
  drinks: any = [];

  constructor(private dishesService: DishesService){}

  ngOnInit() {
    
    switch(this.category)
    {
      case 1:

        this.dishesService.getAllFirsts().subscribe(result => {
    
          this.firsts = result;
        });
        break;
      case 2:

        this.dishesService.getAllSeconds().subscribe(result => {
    
          this.seconds = result;
        });
        break;
      case 3:

        this.dishesService.getAllStarters().subscribe(result => {
    
          this.starters = result;
          });
        break;
      case 4:

        this.dishesService.getAllDesserts().subscribe(result => {
    
          this.desserts = result;
        });
        break;
      case 5:

        this.dishesService.getAllDrinks().subscribe(result => {
    
          this.drinks = result;
        });
        break;
    }
  }
}