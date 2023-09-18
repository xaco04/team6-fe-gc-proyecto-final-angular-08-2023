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
import { BoardAdminComponent } from './components/admin/board-admin/board-admin.component';
import { BoardUserComponent } from './components/user/board-user/board-user.component';
import { BoardChefComponent } from './components/chef/board-chef/board-chef.component';

//Guards
import { authGuard } from './guards/auth.guard';
import { adminGuard } from './guards/admin.guard';
import { chefGuard } from './guards/chef.guard';
import { userGuard } from './guards/user.guard';

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
    component: UserHomeComponent,
    canActivate: [ authGuard, userGuard ]
  },
  {
    path: 'crear_menu',
    component: UserCreateMenuComponent,
    canActivate: [ authGuard, userGuard ]

  },
  {
    path: 'perfil',
    component: UserProfileComponent,
    canActivate: [ authGuard, userGuard ]

  },
  {
    path: 'dashboard-admin',
    component: DashboardAdminComponent,
    canActivate: [ authGuard, adminGuard ]

    
  },
  {
    path: 'usrManagement-list-admin',
    component: UsrManagementListAdminComponent,
    canActivate: [ authGuard, adminGuard ]

  },
  {
    path: 'customerSupport-list-shared',
    component: CustomerSupportListSharedComponent,
    canActivate: [ authGuard, adminGuard ]

  },
  {
    path: 'usrManagement-add-admin',
    component: UsrManagementAddAdminComponent,
    canActivate: [ authGuard, adminGuard ]

  },
  {
    path: 'usrManagement-modify-admin/:id/:active/:name/:surname/:email/:points',
    component: UsrManagementModifyAdminComponent,
    canActivate: [ authGuard, adminGuard ]

  },
  {
    path: 'rewarmanagement-musr-admin',
    component: RewardMUsrAdminComponent,
    canActivate: [ authGuard, adminGuard ]

  }
  ,
  {
    path: 'customerSupport-answer-shared',
    component: CustomerSupportAnswerSharedComponent,
    canActivate: [ authGuard, adminGuard ]

  },
  {
    path: 'profile-admin',
    component: ProfileAdminComponent,
    canActivate: [ authGuard, adminGuard ]

  },
  {
    path: 'analysis-list-admin',
    component: AnalysisListAdminComponent,
    canActivate: [ authGuard, adminGuard ]
  },
  {
    path: 'recipe',
    component: RecipeComponent,
    canActivate: [ authGuard, chefGuard ]

  },
  {
    path: 'platos',
    component: DishListComponent,
    canActivate: [ authGuard, chefGuard ]
  },
  {
    path: 'orders',
    component: OrdersComponent,
    canActivate: [ authGuard, chefGuard ]

  },
  {
    path: 'rewarmanagement-madm-admin',
    component: RewardMAdmAdminComponent,
    canActivate: [ authGuard, adminGuard ]

  },
  {
    path: 'list',
    component: EditPriceSharedComponent,
    canActivate: [ authGuard ]


  },
  {
    path: 'board-admin',
    component: BoardAdminComponent,
    canActivate: [ authGuard, adminGuard ]

  },
  {
    path: 'board-user',
    component: BoardUserComponent,
    canActivate: [ authGuard, userGuard ]

  },
  {
    path: 'board-chef',
    component: BoardChefComponent,
    canActivate: [ authGuard, chefGuard ]

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
