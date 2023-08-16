import { Component } from '@angular/core';

@Component({
  selector: 'app-usr-management-modify-admin',
  templateUrl: './usr-management-modify-admin.component.html',
  styleUrls: ['./usr-management-modify-admin.component.css']
})
export class UsrManagementModifyAdminComponent {
  editNombreUsuario: boolean = false;
  editEmail: boolean = false;
  editNombre: boolean = false;
  editApellidos: boolean = false;
  editContrasena: boolean = false;

  constructor() { }

  toggleEditNombreUsuario() {
    this.editNombreUsuario = !this.editNombreUsuario;
  }

  toggleEditEmail() {
    this.editEmail = !this.editEmail;
  }

  toggleEditNombre() {
    this.editNombre = !this.editNombre;
  }

  toggleEditApellidos() {
    this.editApellidos = !this.editApellidos;
  }

  toggleEditContrasena() {
    this.editContrasena = !this.editContrasena
  }
}
