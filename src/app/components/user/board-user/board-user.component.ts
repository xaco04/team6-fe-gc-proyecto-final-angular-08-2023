import { Component, Output, Input } from '@angular/core';

@Component({
  selector: 'app-board-user',
  templateUrl: './board-user.component.html',
  styleUrls: ['./board-user.component.css']
})
export class BoardUserComponent {

  @Input() selected_dish: number = 0;
  @Output() send_selected_dish: number = 0;
  @Output() get_selected_dish: number = 0;
}