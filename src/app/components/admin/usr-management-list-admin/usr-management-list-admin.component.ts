import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/shared/users-shared.service';

@Component({
  selector: 'app-usr-management-list-admin',
  templateUrl: './usr-management-list-admin.component.html',
  styleUrls: ['./usr-management-list-admin.component.css']
})
export class UsrManagementListAdminComponent implements OnInit {
  users: any[] = []

  constructor(private userService: UserService) {}

  ngOnInit(): void {
      this.users = this.userService.getUsers();
  }
}
