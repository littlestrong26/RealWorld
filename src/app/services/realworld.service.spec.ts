import { TestBed } from '@angular/core/testing';

import { RealworldService } from './realworld.service';

describe('RealworldService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RealworldService = TestBed.get(RealworldService);
    expect(service).toBeTruthy();
  });
});
