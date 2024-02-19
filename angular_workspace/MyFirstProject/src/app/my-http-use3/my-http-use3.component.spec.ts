import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyHttpUse3Component } from './my-http-use3.component';

describe('MyHttpUse3Component', () => {
  let component: MyHttpUse3Component;
  let fixture: ComponentFixture<MyHttpUse3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyHttpUse3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyHttpUse3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
