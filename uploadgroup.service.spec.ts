import { TestBed } from '@angular/core/testing';

import { UploadgroupService } from './uploadgroup.service';

describe('UploadgroupService', () => {
  let service: UploadgroupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UploadgroupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
