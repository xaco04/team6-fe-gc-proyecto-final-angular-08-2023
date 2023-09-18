
import { Component, OnInit } from '@angular/core';
import { DishesService } from 'src/app/services/shared/dishes.service';
@Component({
  selector: 'app-dishes-management-bebidas',
  templateUrl: './dishes-management-bebidas.component.html',
  styleUrls: ['./dishes-management-bebidas.component.css']
})
export class DishesManagementBebidasComponent implements OnInit {
  firstDishes: any[] = []; // Inicializa la propiedad con un array vacío.

  constructor(private dishesService: DishesService) {}

  ngOnInit() {
    // Llamar al método para obtener todos los primeros platos al inicializar el componente.
    this.getAllDrinks();
  }

  getAllDrinks() {
    this.dishesService.getAllDrinks().subscribe((data: any) => {
      this.firstDishes = data; // Almacenar los primeros platos en la variable firstDishes.
    });
  }
}

