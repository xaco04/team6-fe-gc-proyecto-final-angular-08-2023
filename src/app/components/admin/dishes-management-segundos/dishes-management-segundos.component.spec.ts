import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DishesManagementSegundosComponent } from './dishes-management-segundos.component';

describe('DishesManagementSegundosComponent', () => {
  let component: DishesManagementSegundosComponent;
  let fixture: ComponentFixture<DishesManagementSegundosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DishesManagementSegundosComponent]
    });
    fixture = TestBed.createComponent(DishesManagementSegundosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
