import { TestBed } from '@angular/core/testing';

import { RandomCountriesService } from './random-countries.service';

describe('RandomCountriesService', () => {
  let service: RandomCountriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RandomCountriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
