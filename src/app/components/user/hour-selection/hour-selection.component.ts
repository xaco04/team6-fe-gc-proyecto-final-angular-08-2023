import { Component, OnInit } from '@angular/core';
import { HoursServiceService } from '../../../services/shared/hours-service.service';

@Component({
  selector: 'app-hour-selection',
  templateUrl: './hour-selection.component.html',
  styleUrls: ['./hour-selection.component.css']
})
export class HourSelectionComponent implements OnInit{

  hours: any;

  constructor(private hoursService: HoursServiceService){}

  ngOnInit(): void {
      
    this.hoursService.getAllHours().subscribe(result => {

      this.hours = result;
    });
  }
}
