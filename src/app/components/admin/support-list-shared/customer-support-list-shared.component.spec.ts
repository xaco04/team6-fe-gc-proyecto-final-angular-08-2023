import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerSupportListSharedComponent } from './customer-support-list-shared.component';

describe('CustomerSupportListSharedComponent', () => {
  let component: CustomerSupportListSharedComponent;
  let fixture: ComponentFixture<CustomerSupportListSharedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerSupportListSharedComponent]
    });
    fixture = TestBed.createComponent(CustomerSupportListSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
