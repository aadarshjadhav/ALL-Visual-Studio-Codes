import { TestBed } from '@angular/core/testing';

import { MyhttpmovieService } from './myhttpmovie.service';

describe('MyhttpmovieService', () => {
  let service: MyhttpmovieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyhttpmovieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
