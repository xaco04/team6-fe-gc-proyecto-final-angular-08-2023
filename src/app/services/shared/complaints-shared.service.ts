import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComplaintsSharedService {
  private complaints: any[] = [
    {
      id: 1,
      username: 'xavi04',
      image: '../../../../assets/avatar.png',
      subject: 'Patatas Frias',
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip consequat.',
      date_sent: '25/08/2023',
      sender: ''
    }
    ,
    {
      id: 2,
      username: 'xavi04',
      image: '../../../../assets/avatar.png',
      subject: 'Patatas Frias',
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip consequat.',
      date_sent: '25/08/2023',
      sender: ''
    }
    ,
    {
      id: 3,
      username: 'xavi04',
      image: '../../../../assets/avatar.png',
      subject: 'Patatas Frias',
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip consequat.',
      date_sent: '25/08/2023',
      sender: ''
    }
    ,
    {
      id: 4,
      username: 'xavi04',
      image: '../../../../assets/avatar.png',
      subject: 'Patatas Frias',
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip consequat.',
      date_sent: '25/08/2023',
      sender: ''
    }



  ]

  getComplaints(): any[] {
    return this.complaints;
  }
}
