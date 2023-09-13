import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DishInfoComponent } from './dish-info.component';

describe('DishInfoComponent', () => {
  let component: DishInfoComponent;
  let fixture: ComponentFixture<DishInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DishInfoComponent]
    });
    fixture = TestBed.createComponent(DishInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
