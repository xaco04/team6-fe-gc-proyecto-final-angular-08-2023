import { Component, OnInit } from '@angular/core';
import { TokenStorageServiceService } from 'src/app/services/shared/token-storage-service.service';
import { UserService } from 'src/app/services/shared/users-shared.service';

@Component({
  selector: 'app-profile-admin',
  templateUrl: './profile-admin.component.html',
  styleUrls: ['./profile-admin.component.css']
})
export class ProfileAdminComponent implements OnInit {
  userData: any; // Aquí almacenarás los datos del usuario

  constructor(
    private userService: UserService,
    private tokenStorageService: TokenStorageServiceService // Corrección aquí
  ) {} 

  ngOnInit(): void {
    // Obtén los datos del usuario desde el servicio de usuarios por su ID
    const userId = Number(this.tokenStorageService.getUser());
    console.log(userId)
    this.userService.getOneById(userId).subscribe(user => {
      this.userData = user;
      console.log(this.userData); // Verifica que los datos se obtengan correctamente
    });
  }
}
