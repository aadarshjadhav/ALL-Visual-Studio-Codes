import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleEmployeeComponent } from './simple-employee.component';

describe('SimpleEmployeeComponent', () => {
  let component: SimpleEmployeeComponent;
  let fixture: ComponentFixture<SimpleEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimpleEmployeeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SimpleEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
