import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RewardMUsrAdminComponent } from './reward-m-usr-admin.component';

describe('RewardMUsrAdminComponent', () => {
  let component: RewardMUsrAdminComponent;
  let fixture: ComponentFixture<RewardMUsrAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RewardMUsrAdminComponent]
    });
    fixture = TestBed.createComponent(RewardMUsrAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
