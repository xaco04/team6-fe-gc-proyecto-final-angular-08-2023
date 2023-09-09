import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarAdminComponent } from './utils/admin/sidebar-admin/sidebar-admin.component';
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { MdbPopoverModule } from 'mdb-angular-ui-kit/popover';
import { MdbRadioModule } from 'mdb-angular-ui-kit/radio';
import { MdbRangeModule } from 'mdb-angular-ui-kit/range';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { MdbScrollspyModule } from 'mdb-angular-ui-kit/scrollspy';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
import { MdbTooltipModule } from 'mdb-angular-ui-kit/tooltip';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardAdminComponent } from './components/admin/dashboard-admin/dashboard-admin.component';
import { UsrManagementListAdminComponent } from './components/admin/usr-management-list-admin/usr-management-list-admin.component';
import { CustomerSupportListSharedComponent } from './components/admin/support-list-shared/customer-support-list-shared.component';
import { UsrManagementAddAdminComponent } from './components/admin/usr-management-add-admin/usr-management-add-admin.component';
import { UsrManagementModifyAdminComponent } from './components/admin/usr-management-modify-admin/usr-management-modify-admin.component';
import { CustomerSupportAnswerSharedComponent } from './components/admin/support-answer-shared/customer-support-answer-shared.component';
import { ProfileAdminComponent } from './components/admin/profile-admin/profile-admin.component';
import { AnalysisListAdminComponent } from './components/admin/analysis-list-admin/analysis-list-admin.component';
import { RewardMUsrAdminComponent } from './components/admin/reward-m-usr-admin/reward-m-usr-admin.component';
import { PriceSharedComponent } from './components/shared/price-shared/price-shared.component';
import { LoginComponent } from './components/shared/login/login.component';
import { UserHomeComponent } from './components/user/user-home/user-home.component';
import { UserProfileComponent } from './components/user/user-profile/user-profile.component';
import { RecoveryComponent } from './components/shared/recovery/recovery.component';
import { OrdersComponent } from './components/chef/orders/orders.component';
import { RewardComponent } from './components/shared/reward/reward.component';
import { RewardMAdmAdminComponent } from './components/admin/reward-m-adm-admin/reward-m-adm-admin.component';
import { EditPriceSharedComponent } from './components/shared/edit-price-shared/edit-price-shared.component';
import { SidebarUserComponent } from './utils/user/sidebar-user/sidebar-user.component';
import { UserDishComponent } from './components/user/user-dish/user-dish.component';
import { UserDishInfoComponent } from './components/user/user-dish-info/user-dish-info.component';
import { DishSelectorComponent } from './components/user/dish-selector/dish-selector.component';
import { UserCreateMenuComponent } from './components/user/user-create-menu/user-create-menu.component';
import { UserNavbarComponent } from './components/user/user-navbar/user-navbar.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SidebarAdminComponent,
    DashboardAdminComponent,
    UsrManagementListAdminComponent,
    CustomerSupportListSharedComponent,
    UsrManagementAddAdminComponent,
    UsrManagementModifyAdminComponent,
    CustomerSupportAnswerSharedComponent,
    ProfileAdminComponent,
    AnalysisListAdminComponent,
    RewardMUsrAdminComponent,
    PriceSharedComponent,
    LoginComponent,
    UserHomeComponent,
    UserProfileComponent,
    RecoveryComponent,
    OrdersComponent,
    RewardComponent,
    RewardMAdmAdminComponent,
    EditPriceSharedComponent,
    SidebarUserComponent,
    UserDishComponent,
    DishSelectorComponent,
    UserCreateMenuComponent,
    UserDishInfoComponent,
    UserNavbarComponent
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    MdbAccordionModule,
    MdbCarouselModule,
    MdbCheckboxModule,
    MdbCollapseModule,
    MdbDropdownModule,
    MdbFormsModule,
    MdbModalModule,
    MdbPopoverModule,
    MdbRadioModule,
    MdbRangeModule,
    MdbRippleModule,
    MdbScrollspyModule,
    MdbTabsModule,
    MdbTooltipModule,
    MdbValidationModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
