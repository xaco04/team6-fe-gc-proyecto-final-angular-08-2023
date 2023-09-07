import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-hours',
  templateUrl: './user-hours.component.html',
  styleUrls: ['./user-hours.component.css']
})
export class UserHoursComponent {

  horas: string[] = this.generateHours();
  titulo: string = 'Elige la hora de recogida';

  generateHours(): string[]{

    let generated_hours: string[] = [];

    for(let hours = 12; hours <= 15; hours++)
    {
      for(let minutes = 0; minutes <=45; minutes+=15){
        // De esta manera, controlamos que si la hora es en punto, enseñe 2 ceros
        if(minutes === 0)
        {
          let minutes_0 = '00';
          
          generated_hours.push(''+hours+':'+minutes_0);
        }else{

          generated_hours.push(''+hours+':'+minutes);
        }
      }
    }
    
    return generated_hours;
  }
}