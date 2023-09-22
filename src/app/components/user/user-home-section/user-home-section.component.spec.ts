import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserHomeSectionComponent } from './user-home-section.component';

describe('UserHomeSectionComponent', () => {
  let component: UserHomeSectionComponent;
  let fixture: ComponentFixture<UserHomeSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserHomeSectionComponent]
    });
    fixture = TestBed.createComponent(UserHomeSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
