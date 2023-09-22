import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComplaintsSharedService } from 'src/app/services/shared/complaints-shared.service';
import { Complaints } from 'src/app/models/Complaints';

@Component({
  selector: 'app-customer-support-answer-shared',
  templateUrl: './customer-support-answer-shared.component.html',
  styleUrls: ['./customer-support-answer-shared.component.css']
})
export class CustomerSupportAnswerSharedComponent implements OnInit {
  complaintId: number = 0;
  complaints: Complaints[] = [];

  constructor(private route: ActivatedRoute, private complaintsService: ComplaintsSharedService) {}

  ngOnInit(): void {
    // Obtén la ID del parámetro 'id' de la URL
    this.route.params.subscribe(params => {
      this.complaintId = +params['id']; // 'id' debe coincidir con el nombre del parámetro en la URL
      console.log(this.complaintId);
      // Ahora puedes utilizar 'this.complaintId' en tu componente
      this.complaintsService.getOneById(this.complaintId).subscribe(
        (data: Complaints) => { // Cambiar a 'Complaints' en lugar de 'Complaints[]'
          this.complaints = [data]; // Colocar el objeto en un arreglo para que coincida con el tipo esperado
          console.log(this.complaints); // Imprimir el contenido de 'complaints' en la consola
        },
        (error) => {
          console.error('Error al obtener el complaint:', error);
        }
      );
    });
  }
  
  
}
