import { Component } from '@angular/core';
import { UserService } from 'src/app/services/shared/users-shared.service';
import { Users } from 'src/app/models/Users';

@Component({
  selector: 'app-usr-management-add-admin',
  templateUrl: './usr-management-add-admin.component.html',
  styleUrls: ['./usr-management-add-admin.component.css']
})
export class UsrManagementAddAdminComponent {

  nuevoUsuario: Users = {
    id: 0, // O asigna un valor adecuado para id si corresponde
    name: '',
    surname: '',
    email: '',
    password: '',
    image: '',
    points: 0,
    active: true, // Asegúrate de proporcionar un valor booleano para active
    roleName: '', // Asegúrate de proporcionar un valor para roleName
    role: { id: 1, name: 'Administrador' } // Ajusta según tu necesidad
};


  constructor(private userService: UserService) {}

  crearUsuario() {
    this.userService.create(this.nuevoUsuario).subscribe(
      (usuarioCreado) => {
        console.log('Usuario creado con éxito', usuarioCreado);
        // Lógica adicional, como redirigir o mostrar un mensaje de éxito.
      },
      (error) => {
        console.error('Error al crear el usuario', error);
        // Manejo de errores, mostrar mensajes de error, etc.
      }
    );
  }
}
