import { TestBed } from '@angular/core/testing';

import { UsersSharedService } from './users-shared.service';

describe('UsersSharedService', () => {
  let service: UsersSharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersSharedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
