import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDishInfoComponent } from './user-dish-info.component';

describe('UserDishInfoComponent', () => {
  let component: UserDishInfoComponent;
  let fixture: ComponentFixture<UserDishInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserDishInfoComponent]
    });
    fixture = TestBed.createComponent(UserDishInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
