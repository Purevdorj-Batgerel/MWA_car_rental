import { TestBed } from '@angular/core/testing';

import { DealtransferService } from './dealtransfer.service';

describe('DealtransferService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DealtransferService = TestBed.get(DealtransferService);
    expect(service).toBeTruthy();
  });
});
