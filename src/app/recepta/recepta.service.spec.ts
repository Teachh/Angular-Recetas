import { TestBed } from '@angular/core/testing';

import { ReceptaService } from './recepta.service';

describe('ReceptaService', () => {
  let service: ReceptaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReceptaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
