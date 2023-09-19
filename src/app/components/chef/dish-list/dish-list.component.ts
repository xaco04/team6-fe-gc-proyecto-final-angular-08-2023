import { Component, OnInit } from '@angular/core';
import { DishesService } from 'src/app/services/shared/dishes.service';

@Component({
  selector: 'app-dish-list',
  templateUrl: './dish-list.component.html',
  styleUrls: ['./dish-list.component.css']
})
export class DishListComponent implements OnInit{

  firsts: any;
  seconds: any;
  desserts: any;
  starters: any;
  showFirsts: boolean = false;
  showSeconds: boolean = false;
  showDesserts: boolean = false;
  showStarters: boolean = false;

  constructor(private dishesService: DishesService){}

  ngOnInit(): void {

    this.listDishes(1);
  }

  restartDishes(){

    this.showFirsts = false;
    this.showSeconds = false;
    this.showDesserts = false;
    this.showStarters = false;
  }

  listDishes(newCategory: number){

    switch(newCategory)
    {
      case 1:

        this.dishesService.getAllFirsts().subscribe(result => {

          this.firsts = result;
        });
        this.restartDishes();
        this.showFirsts = true;
        break;
      case 2:

        this.dishesService.getAllSeconds().subscribe(result => {

          this.seconds = result;
        });
        this.restartDishes();
        this.showSeconds = true;
        break; 
      case 3:

        this.dishesService.getAllDesserts().subscribe(result => {

          this.desserts = result;
        })
        this.restartDishes();
        this.showDesserts = true;
      break;
      case 4:

      this.dishesService.getAllStarters().subscribe(result => {

        this.starters = result;
      });
      this.restartDishes();
      this.showStarters = true;
      break;
    }
  }
}
