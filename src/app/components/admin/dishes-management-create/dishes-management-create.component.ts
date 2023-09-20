
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { DishesService } from 'src/app/services/shared/dishes.service';
import { Dishes } from 'src/app/models/Dishes';

@Component({
  selector: 'app-dishes-management-create',
  templateUrl: './dishes-management-create.component.html',
  styleUrls: ['./dishes-management-create.component.css']
})
export class DishesManagementCreateComponent {

  nuevoPlato: Dishes = {
    id: 0,
    isActive: true,
    name: '',
    image: '',
    cost: 0,
    description: '',
    isRecommended: true,
    isSuggested: true,
    isHighlighted: true,
    isAvailable: true,
    stock: 0,
    category: { id: 1, name: 'Primeros' }

};


  constructor(private dishesService: DishesService, private route: ActivatedRoute, private router: Router ) {}

  crearPlato() {
    this.dishesService.create(this.nuevoPlato).subscribe(
      (platoCreado) => {
        console.log('Usuario creado con éxito', platoCreado);
        // Lógica adicional, como redirigir o mostrar un mensaje de éxito.
        this.router.navigate(['/dish-management']);


      },
      (error) => {
        console.error('Error al crear el usuario', error);
        // Manejo de errores, mostrar mensajes de error, etc.
      }
    );
  }
}
