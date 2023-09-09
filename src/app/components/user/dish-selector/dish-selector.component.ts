import { Component, Input, OnInit } from '@angular/core';
import { DishesService } from 'src/app/services/shared/dishes.service';

@Component({
  selector: 'app-dish-selector',
  templateUrl: './dish-selector.component.html',
  styleUrls: ['./dish-selector.component.css']
})
export class DishSelectorComponent implements OnInit{

  @Input() category: number = 0;
  
  private firsts: any;
  private seconds: any;
  private starters: any;
  private desserts: any;
  private drinks: any;

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