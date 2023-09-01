import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RewardComponent } from './reward.component';

describe('RewardComponent', () => {
  let component: RewardComponent;
  let fixture: ComponentFixture<RewardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RewardComponent]
    });
    fixture = TestBed.createComponent(RewardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
