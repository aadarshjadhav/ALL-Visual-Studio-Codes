import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyHttpUseMovieComponent } from './my-http-use-movie.component';

describe('MyHttpUseMovieComponent', () => {
  let component: MyHttpUseMovieComponent;
  let fixture: ComponentFixture<MyHttpUseMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyHttpUseMovieComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyHttpUseMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
