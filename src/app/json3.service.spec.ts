import { TestBed } from '@angular/core/testing';

import { Json3Service } from './json3.service';

describe('Json3Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Json3Service = TestBed.get(Json3Service);
    expect(service).toBeTruthy();
  });
});
