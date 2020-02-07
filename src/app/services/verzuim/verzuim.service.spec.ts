import { TestBed } from '@angular/core/testing';

import { VerzuimService } from './verzuim.service';

describe('VerzuimService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VerzuimService = TestBed.get(VerzuimService);
    expect(service).toBeTruthy();
  });
});
