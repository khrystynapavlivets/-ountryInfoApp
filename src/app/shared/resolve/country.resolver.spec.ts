import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { countryResolver } from './country.resolver';

describe('countryResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) =>
    TestBed.runInInjectionContext(() => countryResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
