import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DishesManagementEntrantesComponent } from './dishes-management-entrantes.component';

describe('DishesManagementEntrantesComponent', () => {
  let component: DishesManagementEntrantesComponent;
  let fixture: ComponentFixture<DishesManagementEntrantesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DishesManagementEntrantesComponent]
    });
    fixture = TestBed.createComponent(DishesManagementEntrantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
