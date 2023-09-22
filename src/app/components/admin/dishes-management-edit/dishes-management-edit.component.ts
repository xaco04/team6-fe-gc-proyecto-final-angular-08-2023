
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DishesService } from 'src/app/services/shared/dishes.service';
import { Dishes } from 'src/app/models/Dishes';



@Component({
  selector: 'app-dishes-management-edit',
  templateUrl: './dishes-management-edit.component.html',
  styleUrls: ['./dishes-management-edit.component.css']
})
export class DishesManagementEditComponent implements OnInit{

  dishId: number = 0;
  dishes: Dishes = {} as Dishes;

  editNombre: boolean = false;
  editApellidos: boolean = false;
  editEmail: boolean = false;
  editImage: boolean = false;

  editPoints: boolean = false;
  editStatus: boolean = false;
  editRole: boolean = false;


  // Propiedad para almacenar el valor numérico del rol seleccionado
  selectedCategoryId: number = 0;

  constructor(private route: ActivatedRoute, private dishesService: DishesService, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const dishId = +params['id']; // Obtén el ID del plato desde los parámetros de la URL
      this.dishId = dishId; // Asigna el valor del ID del plato a la propiedad dishId
      // Llama a tu servicio para cargar los datos del plato
      this.dishesService.getOneById(dishId).subscribe(dish => {
        this.dishes = dish;
        this.selectedCategoryId = dish.category.id; // Establece el valor del rol seleccionado
      });
    });
    
  }

  toggleEditNombre() {
    this.editNombre = !this.editNombre;
  }

  toggleEditApellidos() {
    this.editApellidos = !this.editApellidos;
  }

  toggleEditEmail() {
    this.editEmail = !this.editEmail;
  }

  toggleEditImage() {
    this.editImage = !this.editImage;
  }

  toggleEditPoints() {
    this.editPoints = !this.editPoints;
  }

  toggleEditStatus() {
    this.editStatus = !this.editStatus;
  }

  toggleEditRole() {
    this.editRole = !this.editRole;
  }

updateUser() {
  // Asigna el valor numérico del rol seleccionado
  this.dishes.category = { id: this.selectedCategoryId, name: this.getNameFromId(this.selectedCategoryId) };
  
  this.dishesService.update(this.dishId, this.dishes).subscribe(
    (dish) => {
      console.log('Plato actualizado con éxito', dish);
      // Redirige a la página de lista de platos u otras acciones necesarias
      this.router.navigate(['/dish-management']);

    },
    (error) => {
      console.error('Error al actualizar el plato', error);
      // Manejo de errores, mostrar mensajes de error, etc.
    }
  );
}

  
  // Función auxiliar para obtener el nombre del rol a partir del ID
  getNameFromId(categoryId: number): string {
    switch (categoryId) {
      case 1:
        return 'Primeros';
      case 2:
        return 'Segundos';
      case 3:
        return 'Entrantes';
      case 4:
        return 'Postres';
      case 5:
        return 'Bebidas';
      default:
        return ''; // Puedes definir un valor por defecto o manejar este caso según tus necesidades
    }
  }
}








