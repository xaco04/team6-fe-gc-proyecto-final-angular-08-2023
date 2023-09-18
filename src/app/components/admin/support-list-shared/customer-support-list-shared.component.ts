import { Component, OnInit } from '@angular/core';
import { ComplaintsSharedService } from 'src/app/services/shared/complaints-shared.service';
import { Complaints } from 'src/app/models/Complaints';

@Component({
  selector: 'app-customer-support-list-shared',
  templateUrl: './customer-support-list-shared.component.html',
  styleUrls: ['./customer-support-list-shared.component.css']
})
export class CustomerSupportListSharedComponent implements OnInit {
  complaints: Complaints[] = [];

  constructor(private complaintsService: ComplaintsSharedService) {}

  ngOnInit(): void {
    this.complaintsService.getAll().subscribe(
      (data: Complaints[]) => {
        this.complaints = data;
      },
      (error) => {
        console.error('Error al obtener la lista de complaints:', error);
      }
    );
  }
}
