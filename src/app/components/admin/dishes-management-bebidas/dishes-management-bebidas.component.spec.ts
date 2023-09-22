import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DishesManagementBebidasComponent } from './dishes-management-bebidas.component';

describe('DishesManagementBebidasComponent', () => {
  let component: DishesManagementBebidasComponent;
  let fixture: ComponentFixture<DishesManagementBebidasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DishesManagementBebidasComponent]
    });
    fixture = TestBed.createComponent(DishesManagementBebidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
