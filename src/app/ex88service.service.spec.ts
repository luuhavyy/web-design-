import { TestBed } from '@angular/core/testing';

import { Ex88serviceService } from './ex88service.service';

describe('Ex88serviceService', () => {
  let service: Ex88serviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Ex88serviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
