import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-price-shared',
  templateUrl: './price-shared.component.html',
  styleUrls: ['./price-shared.component.css']
})
export class PriceSharedComponent {
  @Input() price: any;

}
