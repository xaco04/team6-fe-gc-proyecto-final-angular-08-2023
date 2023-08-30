import { Component, OnInit, Input } from '@angular/core';
import { UsersService, User } from '../services/users.service';
import { AlergiasService, Alergia } from '../services/alergias.service';
import { PremiosService, Premio } from '../services/premios.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  user: User = {} as User;
  @Input() alergenos: Alergia[] = [];
  prices: any;
  
  constructor(private usersService: UsersService, 
    private alergiasService: AlergiasService,
    private premiosService: PremiosService) {}

  ngOnInit() {

    this.alergenos = this.alergiasService.getAlergias();
    this.prices = this.premiosService.getPremios();

    // Obtener la información del usuario con id 1
    const user = this.usersService.getUserById(1);
    if (user !== undefined) {
      this.user = user;
    }
  }

  activateAllergie(allergen: Alergia){

    if(allergen.activada == true){

      allergen.activada = false;
    }
    else{
      
      allergen.activada = true;
    }
  }

}