import { TestBed } from '@angular/core/testing';

import { RewardsSharedService } from './rewards-shared.service';

describe('RewardsSharedService', () => {
  let service: RewardsSharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RewardsSharedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
