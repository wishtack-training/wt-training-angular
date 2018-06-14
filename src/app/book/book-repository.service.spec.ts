import { TestBed, inject } from '@angular/core/testing';

import { BookRepository } from './book-repository';

describe('BookRepositoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BookRepository]
    });
  });

  it('should be created', inject([BookRepository], (service: BookRepository) => {
    expect(service).toBeTruthy();
  }));
});
