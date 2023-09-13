import { Component } from '@angular/core';

@Component({
  selector: 'app-user-create-menu',
  templateUrl: './user-create-menu.component.html',
  styleUrls: ['./user-create-menu.component.css']
})
export class UserCreateMenuComponent {

  loading_firsts: boolean = false;
  loading_seconds: boolean = false;
  loading_starters: boolean = false;
  loading_desserts: boolean = false;
  loading_drinks: boolean = false;
  
  responsiveness: boolean = false;

  loadFirsts(){

    this.loading_firsts = true;
  }

  loadSeconds(){

    this.loading_seconds = true;
  }

  loadStarters(){

    this.loading_starters = true;
  }

  loadDesserts(){

    this.loading_desserts = true;
  }

  loadDrinks(){

    this.loading_drinks = true;
  }
}
