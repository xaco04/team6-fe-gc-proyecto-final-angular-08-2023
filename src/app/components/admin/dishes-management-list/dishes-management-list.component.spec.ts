import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DishesManagementListComponent } from './dishes-management-list.component';

describe('DishesManagementListComponent', () => {
  let component: DishesManagementListComponent;
  let fixture: ComponentFixture<DishesManagementListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DishesManagementListComponent]
    });
    fixture = TestBed.createComponent(DishesManagementListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
