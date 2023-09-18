
import { Component, OnInit } from '@angular/core';
import { DishesService } from 'src/app/services/shared/dishes.service';
@Component({
  selector: 'app-dishes-management-postres',
  templateUrl: './dishes-management-postres.component.html',
  styleUrls: ['./dishes-management-postres.component.css']
})
export class DishesManagementPostresComponent implements OnInit {
  firstDishes: any[] = []; // Inicializa la propiedad con un array vacío.

  constructor(private dishesService: DishesService) {}

  ngOnInit() {
    // Llamar al método para obtener todos los primeros platos al inicializar el componente.
    this.getAllDesserts();
  }

  getAllDesserts() {
    this.dishesService.getAllDesserts().subscribe((data: any) => {
      this.firstDishes = data; // Almacenar los primeros platos en la variable firstDishes.
    });
  }
}

