import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { DashboardAdminComponent } from './components/admin/dashboard-admin/dashboard-admin.component';
import { UsrManagementListAdminComponent } from './components/admin/usr-management-list-admin/usr-management-list-admin.component';
import { CustomerSupportListSharedComponent } from './components/admin/support-list-shared/customer-support-list-shared.component';
import { UsrManagementAddAdminComponent } from './components/admin/usr-management-add-admin/usr-management-add-admin.component';
import { UsrManagementModifyAdminComponent } from './components/admin/usr-management-modify-admin/usr-management-modify-admin.component';
import { CustomerSupportAnswerSharedComponent } from './components/admin/support-answer-shared/customer-support-answer-shared.component';
import { ProfileAdminComponent } from './components/admin/profile-admin/profile-admin.component';
import { AnalysisListAdminComponent } from './components/admin/analysis-list-admin/analysis-list-admin.component';
import { RewardMUsrAdminComponent } from './components/admin/reward-m-usr-admin/reward-m-usr-admin.component';
import { RecipeComponent } from './components/chef/recipe/recipe.component';
import { LoginComponent } from './components/shared/login/login.component';
import { UserHomeComponent } from './components/user/user-home/user-home.component';
import { UserProfileComponent } from './components/user/user-profile/user-profile.component';
import { RecoveryComponent } from './components/shared/recovery/recovery.component';
import { OrdersComponent } from './components/chef/orders/orders.component';
import { DishListComponent } from './components/chef/dish-list/dish-list.component';
import { RewardMAdmAdminComponent } from './components/admin/reward-m-adm-admin/reward-m-adm-admin.component';
import { EditPriceSharedComponent } from './components/shared/edit-price-shared/edit-price-shared.component';
import { UserCreateMenuComponent } from './components/user/user-create-menu/user-create-menu.component';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: '/login'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'recovery',
    component: RecoveryComponent
  },
  {
    path: 'inicio',
    component: UserHomeComponent
  },
  {
    path: 'crear_menu',
    component: UserCreateMenuComponent
  },
  {
    path: 'perfil',
    component: UserProfileComponent
  },
  {
    path: 'dashboard-admin',
    component: DashboardAdminComponent
  },
  {
    path: 'usrManagement-list-admin',
    component: UsrManagementListAdminComponent
  },
  {
    path: 'customerSupport-list-shared',
    component: CustomerSupportListSharedComponent
  },
  {
    path: 'usrManagement-add-admin',
    component: UsrManagementAddAdminComponent
  },
  {
    path: 'usrManagement-modify-admin/:id/:isActive/:name/:surname/:username/:password',
    component: UsrManagementModifyAdminComponent
  },
  {
    path: 'rewarmanagement-musr-admin',
    component: RewardMUsrAdminComponent
  }
  ,
  {
    path: 'customerSupport-answer-shared',
    component: CustomerSupportAnswerSharedComponent
  },
  {
    path: 'profile-admin',
    component: ProfileAdminComponent
  },
  {
    path: 'analysis-list-admin',
    component: AnalysisListAdminComponent
  },
  {
    path: 'recipe',
    component: RecipeComponent
  },
    path: 'orders',
    component: OrdersComponent
  },
  {
    path: 'rewarmanagement-madm-admin',
    component: RewardMAdmAdminComponent
  },
  {
    path: 'edit-price-shared',
    component: EditPriceSharedComponent
  },  
  {
    path: 'list',
    component: EditPriceSharedComponent
  },
  //Debe ir siempre la última
  {
    path: '**',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
