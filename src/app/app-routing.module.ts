import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { DashboardAdminComponent } from './components/admin/dashboard-admin/dashboard-admin.component';
import { RewardMUsrAdminComponent } from './components/admin/reward-m-usr-admin/reward-m-usr-admin.component';

const routes: Routes = [
  {
    path: 'dashboard-admin',
    component: DashboardAdminComponent
  },
  {
    path: 'rewarmanagement-musr-admin',
    component: RewardMUsrAdminComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
