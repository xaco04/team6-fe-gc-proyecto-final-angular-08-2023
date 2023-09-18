import { Component, OnInit } from '@angular/core';
import { TokenStorageServiceService } from 'src/app/services/shared/token-storage-service.service';
import { UserService } from 'src/app/services/shared/users-shared.service';

@Component({
  selector: 'app-profile-admin',
  templateUrl: './profile-admin.component.html',
  styleUrls: ['./profile-admin.component.css']
})
export class ProfileAdminComponent implements OnInit {
  userData: any;
  editing: boolean = false;

  constructor(
    private userService: UserService,
    private tokenStorageService: TokenStorageServiceService
  ) {}

  ngOnInit(): void {
    const userId = Number(this.tokenStorageService.getUser());
    this.userService.getOneById(userId).subscribe(user => {
      this.userData = user;
    });
  }

  toggleEditing() {
    this.editing = !this.editing;
  }

  saveProfile() {
    // Aquí debes enviar los datos actualizados al servidor para guardarlos
    // Puedes usar this.userData para obtener los valores actualizados

    // Asegúrate de que el usuario esté autenticado antes de guardar los cambios
    const userId = Number(this.tokenStorageService.getUser());

    // Actualiza los datos del usuario en el servidor
    this.userService.update(userId, this.userData).subscribe(updatedUser => {
      this.userData = updatedUser; // Actualiza los datos locales con los datos del servidor
      this.editing = false; // Desactiva el modo de edición
    }, error => {
      console.error('Error al actualizar el perfil:', error);
      // Puedes manejar el error aquí, por ejemplo, mostrando un mensaje al usuario.
    });
  }
}
