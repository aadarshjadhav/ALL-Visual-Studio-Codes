import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyHttpUse2Component } from './my-http-use2.component';

describe('MyHttpUse2Component', () => {
  let component: MyHttpUse2Component;
  let fixture: ComponentFixture<MyHttpUse2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyHttpUse2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyHttpUse2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
