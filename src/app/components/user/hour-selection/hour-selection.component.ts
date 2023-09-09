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

      if (Array.isArray(result)) {
        this.hours = result.map((hour: any) => {
          return {
            ...hour,
            hour: hour.hour.substring(0, 5)
          }
        });
      }
    });
  }
}
