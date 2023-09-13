import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RewardMAdmAdminComponent } from './reward-m-adm-admin.component';

describe('RewardMAdmAdminComponent', () => {
  let component: RewardMAdmAdminComponent;
  let fixture: ComponentFixture<RewardMAdmAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RewardMAdmAdminComponent]
    });
    fixture = TestBed.createComponent(RewardMAdmAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
