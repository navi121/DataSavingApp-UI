import { TestBed } from '@angular/core/testing';

import { UploaddataServiceService } from './uploaddata-service.service';

describe('UploaddataServiceService', () => {
  let service: UploaddataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UploaddataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
