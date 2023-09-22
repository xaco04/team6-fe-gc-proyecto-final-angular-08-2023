import { TestBed } from '@angular/core/testing';

import { UserDishesService } from './user-dishes.service';

describe('UserDishesService', () => {
  let service: UserDishesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserDishesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
