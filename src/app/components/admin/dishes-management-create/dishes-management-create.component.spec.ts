import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DishesManagementCreateComponent } from './dishes-management-create.component';

describe('DishesManagementCreateComponent', () => {
  let component: DishesManagementCreateComponent;
  let fixture: ComponentFixture<DishesManagementCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DishesManagementCreateComponent]
    });
    fixture = TestBed.createComponent(DishesManagementCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
