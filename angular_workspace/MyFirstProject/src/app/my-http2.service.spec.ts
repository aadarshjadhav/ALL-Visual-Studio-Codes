import { TestBed } from '@angular/core/testing';

import { MyHttp2Service } from './my-http2.service';

describe('MyHttp2Service', () => {
  let service: MyHttp2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyHttp2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
