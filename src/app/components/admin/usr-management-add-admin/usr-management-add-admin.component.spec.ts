import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsrManagementAddAdminComponent } from './usr-management-add-admin.component';

describe('UsrManagementAddAdminComponent', () => {
  let component: UsrManagementAddAdminComponent;
  let fixture: ComponentFixture<UsrManagementAddAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsrManagementAddAdminComponent]
    });
    fixture = TestBed.createComponent(UsrManagementAddAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
