import { TestBed } from '@angular/core/testing';

import { UserAllergensService } from './user-allergens.service';

describe('UserAllergensService', () => {
  let service: UserAllergensService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserAllergensService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
