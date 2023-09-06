import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar-user',
  templateUrl: './sidebar-user.component.html',
  styleUrls: ['./sidebar-user.component.css']
})
export class SidebarUserComponent implements OnInit {

  total: number = 0;

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
    }
  ];

  ngOnInit(): void {

    this.getTotal();
  }

  getTotal(): number{

    for(let i = 0; i < this.order.length; i++)
    {
      this.total += this.order[i].price*this.order[i].quantity;
    }

    return this.total
  }
}
