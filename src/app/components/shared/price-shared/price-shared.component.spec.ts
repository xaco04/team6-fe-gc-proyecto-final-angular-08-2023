import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceSharedComponent } from './price-shared.component';

describe('PriceSharedComponent', () => {
  let component: PriceSharedComponent;
  let fixture: ComponentFixture<PriceSharedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PriceSharedComponent]
    });
    fixture = TestBed.createComponent(PriceSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
