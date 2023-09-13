import { Component } from '@angular/core';

@Component({
  selector: 'app-user-create-menu',
  templateUrl: './user-create-menu.component.html',
  styleUrls: ['./user-create-menu.component.css']
})
export class UserCreateMenuComponent {

  adding_first: boolean = false;
  adding_second: boolean = false;
  adding_starter: boolean = false;
  adding_dessert: boolean = false;
  adding_drink: boolean = false;
  responsiveness: boolean = false;
}
