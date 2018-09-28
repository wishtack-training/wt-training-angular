import { TestBed } from '@angular/core/testing';

import { LibAService } from './lib-a.service';

describe('LibAService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LibAService = TestBed.get(LibAService);
    expect(service).toBeTruthy();
  });
});
