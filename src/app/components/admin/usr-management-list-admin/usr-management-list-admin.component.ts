// En el componente TypeScript
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/shared/users-shared.service';
import { Users } from 'src/app/models/Users';

@Component({
  selector: 'app-usr-management-list-admin',
  templateUrl: './usr-management-list-admin.component.html',
  styleUrls: ['./usr-management-list-admin.component.css']
})


export class UsrManagementListAdminComponent implements OnInit {
  users: Users[] = [];
  currentPage: number = 1; // Página actual
  itemsPerPage: number = 10; // Cantidad de elementos por página
  startIndex: number = 0;
  endIndex: number = 0;
  totalRecords: number = 0;
  pagedUsers: Users[] = []; // Agrega esta línea para declarar pagedUsers


  constructor(private userService: UserService) { }

  ngOnInit(): void {
    // Obtén la lista de usuarios al inicializar el componente
    this.userService.getAll().subscribe(users => {
      this.users = users;
      this.updatePageData();
    });
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePageData();
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePageData();
    }
  }

  updatePageData() {
    this.startIndex = (this.currentPage - 1) * this.itemsPerPage;
    this.endIndex = Math.min(this.startIndex + this.itemsPerPage, this.users.length);
    this.totalRecords = this.users.length;

    // Crear una lista de usuarios para la página actual
    this.pagedUsers = this.users.slice(this.startIndex, this.endIndex);
  }

  get totalPages(): number {
    return Math.ceil(this.users.length / this.itemsPerPage);
  }
}