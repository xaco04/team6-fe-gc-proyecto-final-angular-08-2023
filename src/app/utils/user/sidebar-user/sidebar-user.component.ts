import { Component, OnInit } from '@angular/core';
import { TokenStorageServiceService } from 'src/app/services/shared/token-storage-service.service';

@Component({
  selector: 'app-sidebar-user',
  templateUrl: './sidebar-user.component.html',
  styleUrls: ['./sidebar-user.component.css']
})

export class SidebarUserComponent implements OnInit {

  user_role: any;

  order = [
    {
      dish: 'Ensalada César',
      quantity: 1,
      price: 4.5
    },
    {
      dish: 'Pollo con patatas fritas',
      quantity: 1,
      price: 6.5
    },
    {
      dish: 'Coca Cola',
      quantity: 1,
      price: 2.5
    },
    {
      dish: 'Tarta de queso',
      quantity: 1,
      price: 4.5
    },
    {
      dish: 'Patatas bravas',
      quantity: 1,
      price: 3.8
    },
    {
      dish: 'Patatas bravas',
      quantity: 1,
      price: 3.8
    },
    {
      dish: 'Patatas bravas',
      quantity: 1,
      price: 3.8
    }
  ];

  constructor(private tokeStorage: TokenStorageServiceService){

    this.user_role = this.tokeStorage.getRole();
  }

  ngOnInit(): void {

    this.getTotal();
  }

  getTotal(): number {

    let total = 0;
    
    for (let item of this.order) {

      total += item.price * item.quantity;
    }
    return (total*100)/100;
  }
  
}
