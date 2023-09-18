
import { Component, OnInit } from '@angular/core';
import { DishesService } from 'src/app/services/shared/dishes.service';
@Component({
  selector: 'app-dishes-management-entrantes',
  templateUrl: './dishes-management-entrantes.component.html',
  styleUrls: ['./dishes-management-entrantes.component.css']
})
export class DishesManagementEntrantesComponent implements OnInit {
  firstDishes: any[] = []; // Inicializa la propiedad con un array vacío.

  constructor(private dishesService: DishesService) {}

  ngOnInit() {
    // Llamar al método para obtener todos los primeros platos al inicializar el componente.
    this.getAllStarters();
  }

  getAllStarters() {
    this.dishesService.getAllStarters().subscribe((data: any) => {
      this.firstDishes = data; // Almacenar los primeros platos en la variable firstDishes.
    });
  }
}

