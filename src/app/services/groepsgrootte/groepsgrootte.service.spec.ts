import { TestBed } from '@angular/core/testing';

import { GroepsgrootteService } from './groepsgrootte.service';

describe('GroepsgrootteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GroepsgrootteService = TestBed.get(GroepsgrootteService);
    expect(service).toBeTruthy();
  });
});
