import { Component } from '@angular/core';
import { AuthServiceService } from 'src/app/services/shared/auth-service.service';
import { TokenStorageServiceService } from 'src/app/services/shared/token-storage-service.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/shared/users-shared.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  loginForm: FormGroup = new FormGroup({});
  notExistingEmail: boolean = false;
  invalidPassword: boolean = false;

  
  constructor(
    private formBuilder: FormBuilder, 
    private router: Router,
    private authServiceService: AuthServiceService,
    private userService: UserService,
    private tokenStorageService: TokenStorageServiceService) {
      
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    const email: string = this.loginForm.get('email')?.value;
    const password: string = this.loginForm.get('password')?.value;

    // Busca primero el email, para ver si existe un usuario con este email
    this.userService.getOneByEmail(email).subscribe(result => {
      
      if (result == null) {
        this.notExistingEmail = true;

        setTimeout(() => {
          this.notExistingEmail = false;
        }, 3000);
        
      } else {

        this.authServiceService.login(email, password).subscribe(result => {
          this.tokenStorageService.saveToken(result.token);
          // Verifica el rol del usuario
          const userRole = this.tokenStorageService.getRole();
          // Redirige según el rol
          if (userRole === 'Administrador') {
            this.router.navigate(['/board-admin']);
          } else if (userRole === 'Usuario') {
            this.router.navigate(['/board-user']);
          } else {
            
          }

        },
        error => {
          this.invalidPassword = true;

          setTimeout(() => {
            this.invalidPassword = false;
          }, 3000);
        });
      }
    });
  }
}