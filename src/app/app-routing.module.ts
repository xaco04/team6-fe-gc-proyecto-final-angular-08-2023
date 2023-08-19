import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { DashboardAdminComponent } from './components/admin/dashboard-admin/dashboard-admin.component';
import { AnalysisListAdminComponent } from './components/admin/analysis-list-admin/analysis-list-admin.component';

const routes: Routes = [
  {
    path: 'dashboard-admin',
    component: DashboardAdminComponent
  },
  {
    path: 'analysis-list-admin',
    component: AnalysisListAdminComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes),FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
