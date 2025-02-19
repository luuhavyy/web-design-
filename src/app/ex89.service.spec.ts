import { TestBed } from '@angular/core/testing';

import { Ex89Service } from './ex89.service';

describe('Ex89Service', () => {
  let service: Ex89Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Ex89Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
