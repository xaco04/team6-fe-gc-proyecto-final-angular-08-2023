import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerSupportAnswerSharedComponent } from './customer-support-answer-shared.component';

describe('CustomerSupportAnswerSharedComponent', () => {
  let component: CustomerSupportAnswerSharedComponent;
  let fixture: ComponentFixture<CustomerSupportAnswerSharedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerSupportAnswerSharedComponent]
    });
    fixture = TestBed.createComponent(CustomerSupportAnswerSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
