import { TestBed } from '@angular/core/testing';

import { Myhttp3Service } from './myhttp3.service';

describe('Myhttp3Service', () => {
  let service: Myhttp3Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Myhttp3Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
