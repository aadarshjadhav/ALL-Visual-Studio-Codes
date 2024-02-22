import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChickbuttermasalaComponent } from './chickbuttermasala.component';

describe('ChickbuttermasalaComponent', () => {
  let component: ChickbuttermasalaComponent;
  let fixture: ComponentFixture<ChickbuttermasalaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChickbuttermasalaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChickbuttermasalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
