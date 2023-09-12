import { Component, Input } from '@angular/core';
import { DishesService} from '../../../services/shared/dishes.service';

@Component({
  selector: 'app-dish-selector',
  templateUrl: './dish-selector.component.html',
  styleUrls: ['./dish-selector.component.css']
})
export class DishSelectorComponent {

  @Input() category: number = 0;
  @Input() isHome: boolean = false;
  @Input() small_dish: boolean = false;
  @Input() responsiveness: boolean = false;

  @Input() responsive_dish: any;

  firsts: any;
  seconds: any;
  starters: any;
  desserts: any;
  drinks: any;

  constructor(private dishesService: DishesService){}

  ngOnInit() {

    this.dishesService.getAllFirsts().subscribe(result => {

      this.firsts = result;
    });

    this.dishesService.getAllSeconds().subscribe(result => {

      this.seconds = result;
    });

    this.dishesService.getAllStarters().subscribe(result => {

      this.starters = result;
    });

    this.dishesService.getAllDesserts().subscribe(result => {

      this.desserts = result;
    });

    this.dishesService.getAllDrinks().subscribe(result => {

      this.drinks = result;
    });
  }
}