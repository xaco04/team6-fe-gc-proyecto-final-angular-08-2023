import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCreateMenuComponent } from './user-create-menu.component';

describe('UserCreateMenuComponent', () => {
  let component: UserCreateMenuComponent;
  let fixture: ComponentFixture<UserCreateMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserCreateMenuComponent]
    });
    fixture = TestBed.createComponent(UserCreateMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
