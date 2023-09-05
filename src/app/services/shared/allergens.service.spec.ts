import { TestBed } from '@angular/core/testing';

import { AllergensService } from './allergens.service';

describe('AllergiesService', () => {
  let service: AllergensService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllergensService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
