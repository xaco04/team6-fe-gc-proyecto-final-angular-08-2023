import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usr-management-modify-admin',
  templateUrl: './usr-management-modify-admin.component.html',
  styleUrls: ['./usr-management-modify-admin.component.css']
})
export class UsrManagementModifyAdminComponent implements OnInit {
  editId: boolean = false;
  editStatus: boolean = false;
  editNombre: boolean = false;
  editApellidos: boolean = false;
  editUsername: boolean = false;
  editContrasena: boolean = false;

  userId: string = '';
  userStatus: string = '';
  userName: string = '';
  userSurname: string = '';
  userUsername: string = '';
  userPassword: string = '';
  
  
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
        this.userId = params['id'];
        this.userStatus = params['isActive'];
        this.userName = params['name'];
        this.userSurname = params['surname'];
        this.userUsername = params['username'];
        this.userPassword = params['password']
    });
}






  toggleEditId() {
    this.editId = !this.editId;
  }

  toggleEditStatus() {
    this.editStatus = !this.editStatus;
  }

  toggleEditNombre() {
    this.editNombre = !this.editNombre;
  }

  toggleEditApellidos() {
    this.editApellidos = !this.editApellidos;
  }

  toggleEditUsername() {
    this.editUsername = !this.editUsername;
  }

  toggleEditContrasena() {
    this.editContrasena = !this.editContrasena
  }
}
