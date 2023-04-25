import { TestBed } from '@angular/core/testing';

import { ResquetApiService } from './resquet-api.service';

describe('ResquetApiService', () => {
  let service: ResquetApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResquetApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
