import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsrManagementModifyAdminComponent } from './usr-management-modify-admin.component';

describe('UsrManagementModifyAdminComponent', () => {
  let component: UsrManagementModifyAdminComponent;
  let fixture: ComponentFixture<UsrManagementModifyAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsrManagementModifyAdminComponent]
    });
    fixture = TestBed.createComponent(UsrManagementModifyAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
