import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-home-section',
  templateUrl: './user-home-section.component.html',
  styleUrls: ['./user-home-section.component.css']
})
export class UserHomeSectionComponent{

  @Input() dishes: any;  

  elementActive = 0;

  setActiveElement(index: number){

    this.elementActive = index;
  }
}
