import { TestBed, inject } from '@angular/core/testing';

import { LeerlingPrognoseService } from './leerling-prognose.service';

describe('LeerlingPrognoseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LeerlingPrognoseService]
    });
  });

  it('should be created', inject([LeerlingPrognoseService], (service: LeerlingPrognoseService) => {
    expect(service).toBeTruthy();
  }));
});
