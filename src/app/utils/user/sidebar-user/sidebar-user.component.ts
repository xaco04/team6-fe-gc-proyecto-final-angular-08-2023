import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar-user',
  templateUrl: './sidebar-user.component.html',
  styleUrls: ['./sidebar-user.component.css']
})
export class SidebarUserComponent implements OnInit {

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
