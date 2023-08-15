import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsrManagementListAdminComponent } from './usr-management-list-admin.component';

describe('UsrManagementListAdminComponent', () => {
  let component: UsrManagementListAdminComponent;
  let fixture: ComponentFixture<UsrManagementListAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsrManagementListAdminComponent]
    });
    fixture = TestBed.createComponent(UsrManagementListAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
