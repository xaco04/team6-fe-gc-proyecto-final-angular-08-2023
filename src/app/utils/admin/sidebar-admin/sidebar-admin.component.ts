import { Component, OnInit } from '@angular/core';
import { TokenStorageServiceService } from 'src/app/services/shared/token-storage-service.service';

@Component({
  selector: 'app-sidebar-admin',
  templateUrl: './sidebar-admin.component.html',
  styleUrls: ['./sidebar-admin.component.css']
})
export class SidebarAdminComponent implements OnInit {

  constructor(private tokenStorageService: TokenStorageServiceService) {}

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }

  ngOnInit(): void {
    // Tu código de inicialización aquí si es necesario.
  }
}
