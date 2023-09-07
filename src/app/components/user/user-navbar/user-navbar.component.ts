import { Component } from '@angular/core';

@Component({
  selector: 'app-user-navbar',
  templateUrl: './user-navbar.component.html',
  styleUrls: ['./user-navbar.component.css']
})
export class UserNavbarComponent {

  menu_hidden: boolean = false;

  showMenu(){

    if(this.menu_hidden == true){

      this.menu_hidden = false;
    }else{

      this.menu_hidden = true;
    }
  }
}
