import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LintcomponentComponent } from './lintcomponent.component';

describe('LintcomponentComponent', () => {
  let component: LintcomponentComponent;
  let fixture: ComponentFixture<LintcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LintcomponentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LintcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //  simple test case to test if the displayMessage function returns the correct message
  it('should have a message', () => {
    expect(component.displayMessage()).toEqual(
      'Hello, this component follows linting and formatting rules!',
    );
  });
});
