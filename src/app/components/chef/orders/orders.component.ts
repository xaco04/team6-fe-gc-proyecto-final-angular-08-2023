import { Component } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {

  dishes = [
    {
      nombre: "Ensalada Mixta",
      image: '../../../../assets/croquetas.jpg'
    },
    {
      nombre: "Pollo con patatas fritas",
      image: '../../../../assets/croquetas.jpg'
    },
      {
      nombre: "Agua",
      image: '../../../../assets/croquetas.jpg'
    },
      {
      nombre: "Tarta de queso",
      image: '../../../../assets/croquetas.jpg'
    },
      {
      nombre: "Patatas bravas",
      image: '../../../../assets/croquetas.jpg'
    }
  ];

  orders: any[] = [
    {
      n_pedido: 1,
      hora_recogida: '12:30',
      dishes: this.dishes, 
      finished: false
    },
    {
      n_pedido: 2,
      hora_recogida: '12:30',
      dishes: this.dishes, 
      finished: false
    },
      {
      n_pedido: 3,
      hora_recogida: '12:45',
      dishes: this.dishes, 
      finished: false
    },
      {
      n_pedido: 4,
      hora_recogida: '12:45',
      dishes: this.dishes, 
      finished: false
    },
      {
      n_pedido: 5,
      hora_recogida: '12:45',
      dishes: this.dishes, 
      finished: false
    },
      {
      n_pedido: 6,
      hora_recogida: '13:30',
      dishes: this.dishes, 
      finished: false
    },
      {
      n_pedido: 7,
      hora_recogida: '13:30',
      dishes: this.dishes, 
      finished: false
    },
      {
      n_pedido: 8,
      hora_recogida: '13:30',
      dishes: this.dishes, 
      finished: false
    },
  ];

  isOrderFinished: boolean = false;
  showFinishedOrders: boolean = false;

  toggleShowFinishedOrders() {
    this.showFinishedOrders = !this.showFinishedOrders;
  }

  toggleAllOrdersFinished() {
    this.orders.forEach(order => (order.finished = true));
  }

  getFinishedOrders() {
    return this.orders.filter(order => order.finished);
  }

  toggleOrderFinished(order: any) {
    order.finished = !order.finished;
  }



}
