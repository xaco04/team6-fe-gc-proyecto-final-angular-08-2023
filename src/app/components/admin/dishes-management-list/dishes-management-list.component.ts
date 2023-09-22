import { Component, OnInit } from '@angular/core';
import { DishesService } from 'src/app/services/shared/dishes.service';
import { Dishes } from 'src/app/models/Dishes';

@Component({
  selector: 'app-dishes-management-list',
  templateUrl: './dishes-management-list.component.html',
  styleUrls: ['./dishes-management-list.component.css']
})
export class DishesManagementListComponent implements OnInit {
  dishes: Dishes[] = [];

  constructor(private dishesService: DishesService) {}

  ngOnInit() {
    // Llamar al método para obtener todos los primeros platos al inicializar el componente.
    this.getAllFirst();
  }

  getAllFirst() {
    this.dishesService.getAllFirst().subscribe((dishes: Dishes[]) => {
      this.dishes = dishes; // Almacenar los primeros platos en la variable dishes.
    });
  }

  deleteUser(id: number) {
    if (confirm('¿Estás seguro de que deseas eliminar este plato?')) {
      this.dishesService.delete(id).subscribe(() => {
        // Eliminación exitosa, puedes actualizar la lista de platos o tomar cualquier otra acción necesaria.
        // Por ejemplo, volver a cargar la lista de platos después de eliminar uno.
        this.dishesService.getAllFirst().subscribe(dishes => {
          this.dishes = dishes;
        });
      });
    }
  }
}
