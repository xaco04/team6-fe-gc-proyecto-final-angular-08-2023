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
  editPoints: boolean = false;
  editStatus: boolean = false;
  editRole: boolean = false;

  modificarUsuario: Users = {
    id: 0, // O asigna un valor adecuado para id si corresponde
    name: '',
    surname: '',
    email: '',
    password: '$2a$12$ZqQxHBmEgvfvALEvlL00yO/TmkIxlym8eReV3iYi5bNBiaH0w9Wg2', // Si no deseas modificarlo, puedes dejarlo vacío o asignar un valor por defecto
    image: '',   // Si no deseas modificarlo, puedes dejarlo vacío o asignar un valor por defecto
    points: 0,
    active: true, // Asegúrate de proporcionar un valor booleano para active
    roleName: '', // Asegúrate de proporcionar un valor para roleName
    role: { id: 1, name: 'Administrador' } // Ajusta según tu necesidad
  };

  // Propiedad para almacenar el valor numérico del rol seleccionado
  selectedRoleId: number = 0; // Inicialmente 0 o el valor que prefieras

  constructor(private route: ActivatedRoute, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log('Valor de params["id"]: ', params['points']); // Agrega esta línea

      this.modificarUsuario.id = +params['id'];
      this.modificarUsuario.name = params['name'];
      this.modificarUsuario.surname = params['surname'];
      this.modificarUsuario.email = params['email'];
      this.modificarUsuario.points = +params['points'];
      this.modificarUsuario.active = params['active'] === 'true'; // Convierte a booleano si es necesario
      // También puedes obtener el rol del usuario aquí
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
