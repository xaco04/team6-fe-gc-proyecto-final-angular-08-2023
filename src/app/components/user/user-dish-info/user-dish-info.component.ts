import { Component, Input, OnInit } from '@angular/core';
import { DishesService } from 'src/app/services/shared/dishes.service';

@Component({
  selector: 'app-user-dish-info',
  templateUrl: './user-dish-info.component.html',
  styleUrls: ['./user-dish-info.component.css']
})
export class UserDishInfoComponent implements OnInit{

  @Input() id?: any;
  @Input() dish: any;
  @Input() index: number = 0;

  constructor(private dishesService: DishesService){}

  ngOnInit(): void {
    
    this.dishesService.getDishById(this.id).subscribe(result => {

      this.dish = result;
    });
  }
}