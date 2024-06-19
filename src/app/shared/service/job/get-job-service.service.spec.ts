import { TestBed } from '@angular/core/testing';

import { GetJobServiceService } from './get-job-service.service';

describe('GetJobServiceService', () => {
  let service: GetJobServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetJobServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
