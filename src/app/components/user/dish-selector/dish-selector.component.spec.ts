import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DishSelectorComponent } from './dish-selector.component';

describe('DishSelectorComponent', () => {
  let component: DishSelectorComponent;
  let fixture: ComponentFixture<DishSelectorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DishSelectorComponent]
    });
    fixture = TestBed.createComponent(DishSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
