import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormWithMaterialDemoComponent } from './form-with-material-demo.component';

describe('FormWithMaterialDemoComponent', () => {
  let component: FormWithMaterialDemoComponent;
  let fixture: ComponentFixture<FormWithMaterialDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormWithMaterialDemoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormWithMaterialDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
