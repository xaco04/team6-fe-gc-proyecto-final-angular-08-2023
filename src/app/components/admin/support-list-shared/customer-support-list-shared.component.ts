import { Component, OnInit } from '@angular/core';
import { ComplaintsSharedService } from 'src/app/services/shared/complaints-shared.service';

@Component({
  selector: 'app-customer-support-list-shared',
  templateUrl: './customer-support-list-shared.component.html',
  styleUrls: ['./customer-support-list-shared.component.css']
})
export class CustomerSupportListSharedComponent implements OnInit {
  complaints: any[] = []

  constructor(private complaintsService: ComplaintsSharedService) {}

  ngOnInit(): void {
      this.complaints = this.complaintsService.getComplaints();
  }
}

