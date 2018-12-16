import { TestBed } from '@angular/core/testing';

import { CardealService } from './cardeal.service';

describe('CardealService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CardealService = TestBed.get(CardealService);
    expect(service).toBeTruthy();
  });
});
