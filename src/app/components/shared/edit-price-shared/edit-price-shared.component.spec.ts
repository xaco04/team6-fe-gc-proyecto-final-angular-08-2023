import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPriceSharedComponent } from './edit-price-shared.component';

describe('EditPriceSharedComponent', () => {
  let component: EditPriceSharedComponent;
  let fixture: ComponentFixture<EditPriceSharedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditPriceSharedComponent]
    });
    fixture = TestBed.createComponent(EditPriceSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
