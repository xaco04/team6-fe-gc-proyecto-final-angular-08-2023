import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComplaintsSharedService } from 'src/app/services/shared/complaints-shared.service';
import { Complaints } from 'src/app/models/Complaints';

@Component({
  selector: 'app-customer-support-list-shared',
  templateUrl: './customer-support-list-shared.component.html',
  styleUrls: ['./customer-support-list-shared.component.css']
})
export class CustomerSupportListSharedComponent implements OnInit {

  complaintId: number = 0;

  complaints: Complaints[] = [];

  currentPage: number = 1; // Página actual
  itemsPerPage: number = 9; // Cantidad de elementos por página
  startIndex: number = 0;
  endIndex: number = 0;
  totalRecords: number = 0;
  pagedComplaints: Complaints[] = []; // Agrega esta línea para declarar pagedComplaints

  constructor(private route: ActivatedRoute, private complaintsService: ComplaintsSharedService) {}
  

  ngOnInit(): void {
    // Obtén la ID del complaint de los parámetros de la ruta
    this.route.params.subscribe(params => {
      this.complaintId = +params['id']; // 'complaintId' debe coincidir con el nombre del parámetro en la URL
      console.log(this.complaintId)
      // Luego, obtén la lista de complaints
      this.complaintsService.getAll().subscribe(
        (data: Complaints[]) => {
          this.complaints = data;
          this.updatePageData(); // Agrega esta línea para cargar los datos de la primera página
        },
        (error) => {
          console.error('Error al obtener la lista de complaints:', error);
        }
      );
    });
  }












  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePageData();
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePageData();
    }
  }

  updatePageData() {
    this.startIndex = (this.currentPage - 1) * this.itemsPerPage;
    this.endIndex = Math.min(this.startIndex + this.itemsPerPage, this.complaints.length);
    this.totalRecords = this.complaints.length;

    // Crear una lista de usuarios para la página actual
    this.pagedComplaints = this.complaints.slice(this.startIndex, this.endIndex);
  }

  get totalPages(): number {
    return Math.ceil(this.complaints.length / this.itemsPerPage);
  }
}