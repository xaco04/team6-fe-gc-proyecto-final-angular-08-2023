import { Component } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {

  dishes = [
    {
      name: "Ensalada César",
      image: 'https://imag.bonviveur.com/ensalada-cesar-casera.jpg',
      category: 1
    },
    {
      name: "Sopa de Tomate",
      image: 'https://t1.uc.ltmcdn.com/es/posts/3/0/9/como_hacer_sopa_de_tomate_casera_25903_orig.jpg',
      category: 1
    },
    {
      name: "Gazpacho",
      image: 'https://www.annarecetasfaciles.com/files/gazpacho-andaluz.jpg',
      category: 1
    },
    {
      name: "Crema de Calabaza",
      image: 'https://www.annarecetasfaciles.com/files/crema-calabaza-arroz-1-scaled.jpg',
      category: 1
    },
    {
      name: "Tortilla de Patatas",
      image: 'https://cdn.elcocinerocasero.com/imagen/receta/1000/2022-06-15-19-04-10/tortilla-de-patata.jpeg',
      category: 1
    },
    {
      name: "Hummus con Pan de Pita",
      image: 'https://imagenes.montevideo.com.uy/imgnoticias/201409/_W880_H495/463070.jpg',
      category: 1
    },
    {
      name: "Bruschetta",
      image: 'https://www.sanpellegrino.com/es/sites/g/files/xknfdk2326/files/styles/recipe_fallback/public/bruschetta_0.jpg?itok=65CUYOtT',
      category: 1
    },
    {
      name: "Croquetas de Jamón",
      image: 'https://www.cocinatis.com/archivos/202207/CTIS0549-receta-croquetas-jamon.jpg',
      category: 1
    },
    {
      name: "Pollo al Curry",
      image: 'https://i.blogs.es/9ea7a4/pollo_curry-copia/650_1200.jpg',
      category: 2
    },
    {
      name: "Lasagna de Carne",
      image: 'https://www.annarecetasfaciles.com/files/miniatura-55-815x458.jpg',
      category: 2
    },
    {
      name: "Pescado al Horno",
      image: 'https://i.blogs.es/153f56/pescado-al-horno/1366_2000.jpg',
      category: 2
    },
    {
      name: "Risotto de Setas",
      image: 'https://i.blogs.es/b64bf1/risotto-de-setas/840_560.jpg',
      category: 2
    },
    {
      name: "Paella de Marisco",
      image: 'https://imag.bonviveur.com/paella-marisco.jpg',
      category: 2
    },
    {
      name: "Solomillo a la Plancha",
      image: 'https://solomillodecerdo.es/img/solomillo-de-cerdo-a-la-plancha-931.jpg',
      category: 2
    },
    {
      name: "Cordero Asado",
      image: '',
      category: 2
    },
    {
      name: "Pasta Carbonara",
      image: '',
      category: 2
    },
    {
      name: "Patatas Bravas",
      image: 'https://www.annarecetasfaciles.com/files/dsc01788.jpg',
      category: 3
    },
    {
      name: "Calamares a la Romana",
      image: 'https://www.hogarmania.com/archivos/202206/karl6992-calamares-romana-xl-1280x720x80xX.jpg',
      category: 3
    },
    {
      name: "Nachos con Queso",
      image: 'https://okdiario.com/img/2018/02/27/nachos-con-queso.jpg',
      category: 3
    },
    {
      name: "Albóndigas en Salsa",
      image: '',
      category: 3
    },
    {
      name: "Empanadas de Carne",
      image: '',
      category: 3
    },
    {
      name: "Queso Frito",
      image: 'https://imag.bonviveur.com/cenital-queso-frito.jpg',
      category: 3
    },
    {
      name: "Gambas al Ajillo",
      image: 'https://i.blogs.es/eeeae0/gambas-al-ajillo/1366_2000.jpg',
      category: 3
    },
    {
      name: "Tostas de Salmón",
      image: 'https://imag.bonviveur.com/emplatado-de-la-tosta-de-salmon-ahumado-con-queso.jpg',
      category: 3
    },
    {
      name: "Tarta de Queso",
      image: 'https://i.blogs.es/75907e/tarta_queso_philadelphia-min/1366_2000.jpeg',
      category: 4
    },
    {
      name: "Brownie con Helado",
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSavaRUGXNSd5gHpaDZ2UBC4B3N-9B3xWBC5rBaTzHffLubRbi4foDUdiAKnkV3jFOk-5o&usqp=CAU',
      category: 4
    },
    {
      name: "Tiramisú",
      image: 'https://recetasdecocina.elmundo.es/wp-content/uploads/2022/08/tiramisu-postre-italiano.jpg',
      category: 4
    },
    {
      name: "Crema Catalana",
      image: '',
      category: 4
    },
    {
      name: "Arroz con Leche",
      image: '',
      category: 4
    },
    {
      name: "Flan de Huevo",
      image: '',
      category: 4
    },
    {
      name: "Mousse de Chocolate",
      image: '',
      category: 4
    },
    {
      name: "Natillas",
      image: '',
      category: 4
    },
    {
      name: "Agua Mineral",
      image: 'https://cloudfront-eu-central-1.images.arcpublishing.com/prisaradio/ZGIOCMP7FZOZRO7LKNC7CMWP7Y.jpg',
      category: 5
    },
    {
      name: "Refrescos",
      image: '',
      category: 5
    },
    {
      name: "Zumo de Frutas",
      image: '',
      category: 5
    },
    {
      name: "Cerveza",
      image: 'https://s2.ppllstatics.com/elcorreo/www/multimedia/202003/12/media/cortadas/cerveza-k6i-U1004822255263LH-1248x770@RC.jpg',
      category: 5
    },
    {
      name: "Vino",
      image: '',
      category: 5
    },
    {
      name: "Cócteles",
      image: 'https://s1.eestatic.com/2015/03/29/cocinillas/cocinillas_21757889_115899181_1706x960.jpg',
      category: 5
    },
    {
      name: "Café",
      image: 'https://www.sabervivirtv.com/medio/2022/06/09/6-beneficios-del-cafe-para-tu-salud-que-quiza-no-conozcas_532ab4fd_1280x720.jpg',
      category: 5
    },
    {
      name: "Té",
      image: 'https://www.lavanguardia.com/files/article_gallery_microformat/uploads/2019/03/27/5e997db515902.jpeg',
      category: 5
    }
  ];

  orders = [
    {
      n_pedido: 1,
      hora_recogida: '12:30',
      dishes: [
        this.getDishByName("Ensalada César"),
        this.getDishByName("Sopa de Tomate"),
        this.getDishByName("Gazpacho"),
        this.getDishByName("Crema de Calabaza"),
        this.getDishByName("Tortilla de Patatas"),
        this.getDishByName("Sopa de Tomate"),
        this.getDishByName("Gazpacho"),
        this.getDishByName("Crema de Calabaza"),
        this.getDishByName("Tortilla de Patatas")
      ],
      finished: false
    },
    {
      n_pedido: 2,
      hora_recogida: '12:30',
      dishes: [
        this.getDishByName("Pollo al Curry"),
        this.getDishByName("Lasagna de Carne"),
        this.getDishByName("Sopa de Tomate")
      ],
      finished: false
    },
    {
      n_pedido: 3,
      hora_recogida: '13:30',
      dishes: [
        this.getDishByName("Tarta de Queso"),
        this.getDishByName("Brownie con Helado"),
        this.getDishByName("Tiramisú"),
        this.getDishByName("Lasagna de Carne"),
        this.getDishByName("Sopa de Tomate")
      ],
      finished: false
    },
    {
      n_pedido: 4,
      hora_recogida: '13:30',
      dishes: [
        this.getDishByName("Gambas al Ajillo"),
        this.getDishByName("Tostas de Salmón"),
        this.getDishByName("Queso Frito")
      ],
      finished: false
    },
    {
      n_pedido: 5,
      hora_recogida: '13:30',
      dishes: [
        this.getDishByName("Patatas Bravas"),
        this.getDishByName("Calamares a la Romana"),
        this.getDishByName("Nachos con Queso"),
        this.getDishByName("Queso Frito")
      ],
      finished: false
    },
    {
      n_pedido: 6,
      hora_recogida: '14:30',
      dishes: [
        this.getDishByName("Té"),
        this.getDishByName("Cerveza"),
        this.getDishByName("Cócteles")
      ],
      finished: false
    },
    {
      n_pedido: 7,
      hora_recogida: '14:30',
      dishes: [
        this.getDishByName("Agua Mineral"),
        this.getDishByName("Café"),
        this.getDishByName("Solomillo a la Plancha"),
        this.getDishByName("Crema de Calabaza"),
        this.getDishByName("Tortilla de Patatas")
      ],
      finished: false
    }
  ];

  markAsFinished(order: any) {
    order.finished = true;
  }
  getDishByName(name: string) {
    return this.dishes.find(dish => dish.name === name);
  }
  sortDishesByCategory(dishes: any[]): any[] {
    return dishes.sort((a, b) => a.category - b.category);
  }
}