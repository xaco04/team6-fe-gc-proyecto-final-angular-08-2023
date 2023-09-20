import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DishesManagementEditComponent } from './dishes-management-edit.component';

describe('DishesManagementEditComponent', () => {
  let component: DishesManagementEditComponent;
  let fixture: ComponentFixture<DishesManagementEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DishesManagementEditComponent]
    });
    fixture = TestBed.createComponent(DishesManagementEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
