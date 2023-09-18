import { Component, OnInit } from '@angular/core';
import { DishesService } from 'src/app/services/shared/dishes.service';
@Component({
  selector: 'app-dishes-management-list',
  templateUrl: './dishes-management-list.component.html',
  styleUrls: ['./dishes-management-list.component.css']
})
export class DishesManagementListComponent implements OnInit {
  firstDishes: any[] = []; // Inicializa la propiedad con un array vacío.

  constructor(private dishesService: DishesService) {}

  ngOnInit() {
    // Llamar al método para obtener todos los primeros platos al inicializar el componente.
    this.getAllFirsts();
  }

  getAllFirsts() {
    this.dishesService.getAllFirsts().subscribe((data: any) => {
      this.firstDishes = data; // Almacenar los primeros platos en la variable firstDishes.
    });
  }
}

