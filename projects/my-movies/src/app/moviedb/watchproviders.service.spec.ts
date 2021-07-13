import { TestBed } from '@angular/core/testing';

import { WatchprovidersService } from './watchproviders.service';

describe('WatchprovidersService', () => {
  let service: WatchprovidersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WatchprovidersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
