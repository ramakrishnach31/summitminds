import { TestBed } from '@angular/core/testing';

import { Json4Service } from './json4.service';

describe('Json4Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Json4Service = TestBed.get(Json4Service);
    expect(service).toBeTruthy();
  });
});
