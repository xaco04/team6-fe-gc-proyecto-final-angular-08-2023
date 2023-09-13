import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/services/shared/auth-service.service';
import { TokenStorageServiceService } from 'src/app/services/shared/token-storage-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = {
    userName: null,
    password: null 
  };
  
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = 'El usuario o la contraseña son incorrectos';
  roles: string = '';
  userId: number = 0;

  constructor(private authService: AuthServiceService, private tokenStorage: TokenStorageServiceService, private router: Router) { }

  ngOnInit(): void {
      if (this.tokenStorage.getToken()) {
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUsers().roleName;
        this.userId = this.tokenStorage.getUsers().userId;
        console.log(this.userId);
        // console.log(this.roles); para comprobar que muestra
      }

      if (this.roles === 'Administrador') {
        setTimeout(() => {
          this.router.navigate(['/board-admin']);
        }, 5000);
      } else if (this.roles === 'Usuario') {
        setTimeout(() => {
          this.router.navigate(['/ruta-rol2']);
        }, 5000);
      } else if (this.roles === 'Encargado') {
        setTimeout(() => {
          this.router.navigate(['/ruta-rol3']);
        }, 5000);
      } else if (this.roles === 'Cocinero') {
        setTimeout(() => {
          this.router.navigate(['/ruta-rol4']);
        }, 5000);
      } else {
        this.router.navigate(['/login']);
      }

  }


  onSubmit(): void {
    const { userName, password } = this.form;
    console.log(userName, password)

  
    this.authService.login(userName, password).subscribe({
      next: (data) => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);
    
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUsers().roleName;
        this.userId = this.tokenStorage.getUsers().userId;

        this.reloadPage();
      },
      error: (err) => {
        if (err && err.error && err.error.message) {
          this.errorMessage = err.error.message;
        } else {
          this.errorMessage = 'Error desconocido';
        }
        this.isLoginFailed = true;
      },
    });
  }

  reloadPage(): void {
    window.location.reload();
  }
}
