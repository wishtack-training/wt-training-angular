import { TestBed } from '@angular/core/testing';

import { LibBService } from './lib-b.service';

describe('LibBService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LibBService = TestBed.get(LibBService);
    expect(service).toBeTruthy();
  });
});
