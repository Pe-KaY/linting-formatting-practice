import { TestBed, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

    // this test case should log a message when ngOnInit is called
  it('should log a message when x is 10', () => {
    const spy = spyOn(console, 'log');
    component.ngOnInit();
    expect(spy).toHaveBeenCalledWith('x is 10');
  });


  // this test case should log a message when doSomething is called
  it('should log a message when calling doSomething', () => {
    const spy = spyOn(console, 'log');
    component.doSomething();
    expect(spy).toHaveBeenCalledWith(20);
  });
})