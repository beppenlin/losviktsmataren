import { TestBed, inject } from '@angular/core/testing';

import { StoreServerService } from './store-server.service';

describe('StoreServerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StoreServerService]
    });
  });

  it('should be created', inject([StoreServerService], (service: StoreServerService) => {
    expect(service).toBeTruthy();
  }));
});
