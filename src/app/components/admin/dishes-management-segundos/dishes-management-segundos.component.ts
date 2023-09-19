
import { Component, OnInit } from '@angular/core';
import { DishesService } from 'src/app/services/shared/dishes.service';
@Component({
  selector: 'app-dishes-management-segundos',
  templateUrl: './dishes-management-segundos.component.html',
  styleUrls: ['./dishes-management-segundos.component.css']
})
export class DishesManagementSegundosComponent implements OnInit {
  firstDishes: any[] = []; // Inicializa la propiedad con un array vacío.

  constructor(private dishesService: DishesService) {}

  ngOnInit() {
    // Llamar al método para obtener todos los primeros platos al inicializar el componente.
    this.getAllSeconds();
  }

  getAllSeconds() {
    this.dishesService.getAllSeconds().subscribe((data: any) => {
      this.firstDishes = data; // Almacenar los primeros platos en la variable firstDishes.
    });
  }
}

