import { TestBed } from '@angular/core/testing';

import { ComplaintsSharedService } from './complaints-shared.service';

describe('ComplaintsSharedService', () => {
  let service: ComplaintsSharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComplaintsSharedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
