import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dish-info',
  templateUrl: './dish-info.component.html',
  styleUrls: ['./dish-info.component.css']
})
export class DishInfoComponent {
  @Input() dish: any;

  editMode = false;
  editedDish: any = {};

  editDish() {
    this.editMode = true;
    this.editedDish = { ...this.dish };
  }

  saveDish() {
    this.editMode = false;
  }

  cancelEdit() {
    this.editMode = false;
  }
}