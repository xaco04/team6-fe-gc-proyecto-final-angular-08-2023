import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from 'src/app/services/shared/users-shared.service';
import { Users } from 'src/app/models/Users';
import { NgForm } from '@angular/forms';

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

  searchTerm: string = ''; // Variable para almacenar el valor de búsqueda
  @ViewChild('searchForm') searchForm!: NgForm; // Obtener una referencia al formulario de búsqueda



  constructor(private userService: UserService) { }

  ngOnInit(): void {
    // Obtén la lista de usuarios al inicializar el componente
    this.userService.getAll().subscribe(users => {
      this.users = users;
      this.updatePageData();
    });
  }

searchUsers() {
  const searchTerm = this.searchTerm.trim();

  if (searchTerm === '') {
    this.userService.getAll().subscribe(users => {
      this.users = users;
      this.updatePageData();
    });
  } else {
    // Realizar la búsqueda por rol o email
    this.userService.getAllByRoleName(searchTerm).subscribe(users => {
      this.users = users;
      this.updatePageData();
    });

    // Además, puedes realizar la búsqueda por email
    this.userService.getOneByEmail(searchTerm).subscribe(user => {
      if (user) {
        // Si se encuentra un usuario por email, agrégalo a la lista de resultados
        if (!this.users.includes(user)) {
          this.users.push(user);
        }
        this.updatePageData();
      }
    });

    // Además, puedes realizar la búsqueda por nombre
    this.userService.getOneByName(searchTerm).subscribe(user => {
      if (user) {
        // Si se encuentra un usuario por nombre, agrégalo a la lista de resultados
        if (!this.users.includes(user)) {
          this.users.push(user);
        }
        this.updatePageData();
      }
    });

    // Además, puedes realizar la búsqueda por nombre
    this.userService.getOneBySurname(searchTerm).subscribe(user => {
      if (user) {
        // Si se encuentra un usuario por nombre, agrégalo a la lista de resultados
        if (!this.users.includes(user)) {
          this.users.push(user);
        }
        this.updatePageData();
      }
    });
  }
}

deleteUser(id: number) {
  if (confirm('¿Estás seguro de que deseas eliminar este usuario?')) {
    this.userService.delete(id).subscribe(() => {
      // Eliminación exitosa, puedes actualizar la lista de usuarios o tomar cualquier otra acción necesaria.
      // Por ejemplo, volver a cargar la lista de usuarios después de eliminar uno.
      this.userService.getAll().subscribe(users => {
        this.users = users;
        this.updatePageData();
      });
    });
  }
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