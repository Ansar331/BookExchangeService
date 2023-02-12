import { TestBed } from '@angular/core/testing';

import { CreateDataService } from './create-data.service';

describe('CreateDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreateDataService = TestBed.get(CreateDataService);
    expect(service).toBeTruthy();
  });
});
