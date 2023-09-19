import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DishesManagementPostresComponent } from './dishes-management-postres.component';

describe('DishesManagementPostresComponent', () => {
  let component: DishesManagementPostresComponent;
  let fixture: ComponentFixture<DishesManagementPostresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DishesManagementPostresComponent]
    });
    fixture = TestBed.createComponent(DishesManagementPostresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
