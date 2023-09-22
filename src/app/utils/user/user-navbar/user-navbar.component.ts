import { Component } from '@angular/core';
import { TokenStorageServiceService } from 'src/app/services/shared/token-storage-service.service';

@Component({
  selector: 'app-user-navbar',
  templateUrl: './user-navbar.component.html',
  styleUrls: ['./user-navbar.component.css']
})
export class UserNavbarComponent {

  user_role: any;

  menu_hidden: boolean = false;

  constructor(private tokeStorage: TokenStorageServiceService){

    this.user_role = this.tokeStorage.getRole();
  }

  showMenu(){

    if(this.menu_hidden == true){

      this.menu_hidden = false;
    }else{

      this.menu_hidden = true;
    }
  }  
}
