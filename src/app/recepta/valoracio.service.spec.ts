import { TestBed } from '@angular/core/testing';

import { ValoracioService } from './valoracio.service';

describe('ValoracioService', () => {
  let service: ValoracioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValoracioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
