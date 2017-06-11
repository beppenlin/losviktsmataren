import { TestBed, inject } from '@angular/core/testing';

import { BerryService } from './berry.service';

describe('BerryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BerryService]
    });
  });

  it('should be created', inject([BerryService], (service: BerryService) => {
    expect(service).toBeTruthy();
  }));
});
