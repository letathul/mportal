import { TestBed } from '@angular/core/testing';

import { SamlpeDataService } from './samlpe-data.service';

describe('SamlpeDataService', () => {
  let service: SamlpeDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SamlpeDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
