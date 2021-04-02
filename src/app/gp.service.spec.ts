import { TestBed } from '@angular/core/testing';

import { GpService } from './gp.service';

describe('GpService', () => {
  let service: GpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
