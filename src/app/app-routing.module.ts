import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { DashboardAdminComponent } from './components/admin/dashboard-admin/dashboard-admin.component';
import { UsrManagementListAdminComponent } from './components/admin/usr-management-list-admin/usr-management-list-admin.component';
import { UsrManagementAddAdminComponent } from './components/admin/usr-management-add-admin/usr-management-add-admin.component';
import { UsrManagementModifyAdminComponent } from './components/admin/usr-management-modify-admin/usr-management-modify-admin.component';

const routes: Routes = [
  {
    path: 'dashboard-admin',
    component: DashboardAdminComponent
  },
  {
    path: 'usrManagement-list-admin',
    component: UsrManagementListAdminComponent
  },
  {
    path: 'usrManagement-add-admin',
    component: UsrManagementAddAdminComponent
  },
  {
    path: 'usrManagement-modify-admin',
    component: UsrManagementModifyAdminComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
