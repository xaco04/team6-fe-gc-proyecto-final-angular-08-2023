import { Component, OnInit } from '@angular/core';
import { DishesService } from 'src/app/services/shared/dishes.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit{

  section1: any;
  section2: any;
  section3: any;
  section4: any;

  constructor(private dishesService: DishesService){}

  ngOnInit(): void {
      
    this.dishesService.getAllStarters().subscribe(result =>{

      this.section1 = result;
    })

    this.dishesService.getAllSeconds().subscribe(result =>{

      this.section2 = result;
    })

    this.dishesService.getAllDrinks().subscribe(result =>{

      this.section3 = result;
    })

    this.dishesService.getAllDesserts().subscribe(result =>{

      this.section4 = result;
    })
  }

}
