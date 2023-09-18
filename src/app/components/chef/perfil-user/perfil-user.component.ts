
import { Component, OnInit } from '@angular/core';
import { TokenStorageServiceService } from 'src/app/services/shared/token-storage-service.service';
import { UserService } from 'src/app/services/shared/users-shared.service';

@Component({
  selector: 'app-perfil-user',
  templateUrl: './perfil-user.component.html',
  styleUrls: ['./perfil-user.component.css']
})
export class PerfilUserComponent {
  userData: any;
  editing: boolean = false;
  selectedRoleId: number = 0;
  userId: number = 0; // Declara userId como una propiedad de la clase

  constructor(
    private userService: UserService,
    private tokenStorageService: TokenStorageServiceService
  ) {}

  ngOnInit(): void {
    this.userId = Number(this.tokenStorageService.getUser());
    this.userService.getOneById(this.userId).subscribe(user => {
        this.userData = user;
        this.selectedRoleId = user.role.id;
    });
  }

  toggleEditing() {
    this.editing = !this.editing;
  }

  saveProfile() {
    // Actualiza el campo "role.name" con el valor seleccionado
    this.userData.role.name = this.getRoleNameFromId(this.selectedRoleId);

    // Utiliza this.userId en lugar de userId
    this.userService.update(this.userId, this.userData).subscribe(updatedUser => {
        this.userData = updatedUser;
        this.editing = false;
    }, error => {
        console.error('Error al actualizar el perfil:', error);
    });
  }

// Agrega un método para obtener el nombre del rol a partir del ID
getRoleNameFromId(roleId: number): string {
    switch (roleId) {
        case 1:
            return 'Administrador';
        case 2:
            return 'Usuario';
        case 3:
            return 'Encargado';
        default:
            return '';
    }
}

}