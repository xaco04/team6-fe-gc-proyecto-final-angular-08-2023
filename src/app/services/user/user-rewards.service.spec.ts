import { TestBed } from '@angular/core/testing';

import { UserRewardsService } from './user-rewards.service';

describe('UserRewardsService', () => {
  let service: UserRewardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserRewardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
