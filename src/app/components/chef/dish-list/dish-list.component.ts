import { Component } from '@angular/core';

@Component({
  selector: 'app-dish-list',
  templateUrl: './dish-list.component.html',
  styleUrls: ['./dish-list.component.css']
})
export class DishListComponent {
  dishes = [
    {
      nombre: "Pizza Margarita",
      image: '../../../../assets/avatar.png',
      resumenReceta: "Una deliciosa pizza clásica con salsa de tomate, mozzarella y albahaca.",
      ingredientes: ["Masa de pizza", "Salsa de tomate", "Queso mozzarella", "Albahaca fresca"],
      alergenos: ["Gluten", "Lactosa"]
    },
    {
      nombre: "Ensalada César",
      image: '../../../../assets/croquetas.jpg',
      resumenReceta: "Una ensalada fresca con pollo a la parrilla, lechuga romana y aderezo César.",
      ingredientes: ["Lechuga romana", "Pollo a la parrilla", "Crutones", "Aderezo César"],
      alergenos: ["Lácteos", "Huevo"]
    },
    {
      nombre: "Sushi de Salmón",
      image: '../../../../assets/croquetas.jpg',
      resumenReceta: "Rollitos de sushi rellenos de salmón fresco y aguacate, servidos con salsa de soja.",
      ingredientes: ["Salmón fresco", "Aguacate", "Arroz para sushi", "Algas nori"],
      alergenos: ["Pescado", "Soja"]
    },
    {
      nombre: "Pasta Carbonara",
      image: '../../../../assets/croquetas.jpg',
      resumenReceta: "Pasta cremosa con huevo, queso parmesano y panceta crujiente.",
      ingredientes: ["Pasta", "Huevo", "Queso parmesano", "Panceta"],
      alergenos: ["Huevo", "Lácteos"]
    },
    {
      nombre: "Tarta de Manzana",
      image: '../../../../assets/croquetas.jpg',
      resumenReceta: "Una deliciosa tarta de manzana casera con una base de hojaldre y relleno de manzanas caramelizadas.",
      ingredientes: ["Hojaldre", "Manzanas", "Azúcar", "Canela"],
      alergenos: ["Gluten"]
    }
  ];

  selectedDish: any | null = null; // Inicialmente, no se ha seleccionado ningún plato
  isInfoVisible = false;

  toggleDishInfo(dish: any) {
    if (this.selectedDish === dish) {
      this.selectedDish = null;
      this.isInfoVisible = false;
    } else {
      this.selectedDish = dish;
      this.isInfoVisible = true;
    }
  } 

}
