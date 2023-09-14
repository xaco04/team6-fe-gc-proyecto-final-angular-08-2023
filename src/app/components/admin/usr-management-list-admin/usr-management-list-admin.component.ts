
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/shared/users-shared.service';
import { Users } from 'src/app/models/Users';

@Component({
  selector: 'app-usr-management-list-admin',
  templateUrl: './usr-management-list-admin.component.html',
  styleUrls: ['./usr-management-list-admin.component.css']
})
export class UsrManagementListAdminComponent implements OnInit {
  users: any[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    // Obtén la lista de usuarios al inicializar el componente
    this.userService.getAll().subscribe(users => {
      this.users = users;
    });
  }
}
