import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/shared/users-shared.service';
import { Users } from 'src/app/models/Users';

@Component({
  selector: 'app-usr-management-modify-admin',
  templateUrl: './usr-management-modify-admin.component.html',
  styleUrls: ['./usr-management-modify-admin.component.css']
})
export class UsrManagementModifyAdminComponent implements OnInit {
  editNombre: boolean = false;
  editApellidos: boolean = false;
  editEmail: boolean = false;
  editImage: boolean = false;

  editPoints: boolean = false;
  editStatus: boolean = false;
  editRole: boolean = false;

  modificarUsuario: Users = {
    id: 0,
    name: '',
    surname: '',
    email: '',
    password: '', // Debes proporcionar un valor válido si es necesario
    image: '',   // Debes proporcionar un valor válido si es necesario
    points: 0,
    active: true,
    roleName: '',
    role: { id: 1, name: 'Administrador' }
  };

  // Propiedad para almacenar el valor numérico del rol seleccionado
  selectedRoleId: number = 0;

  constructor(private route: ActivatedRoute, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const userId = +params['id']; // Obtén el ID del usuario desde los parámetros de la URL

      // Llama a tu servicio para cargar los datos del usuario
      this.userService.getOneById(userId).subscribe(user => {
        this.modificarUsuario = user;
        this.selectedRoleId = user.role.id; // Establece el valor del rol seleccionado
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
    this.modificarUsuario.role = { id: this.selectedRoleId, name: this.getRoleNameFromId(this.selectedRoleId) };

    this.userService.update(this.modificarUsuario.id, this.modificarUsuario).subscribe(
      (user) => {
        console.log('Usuario actualizado con éxito', user);
        // Redirige a la página de lista de usuarios u otras acciones necesarias
        this.router.navigate(['/usrManagement-list-admin']);
      },
      (error) => {
        console.error('Error al actualizar el usuario', error);
        // Manejo de errores, mostrar mensajes de error, etc.
      }
    );
  }

  // Función auxiliar para obtener el nombre del rol a partir del ID
  getRoleNameFromId(roleId: number): string {
    switch (roleId) {
      case 1:
        return 'Administrador';
      case 2:
        return 'Usuario';
      case 3:
        return 'Encargado';
      default:
        return ''; // Puedes definir un valor por defecto o manejar este caso según tus necesidades
    }
  }
}
