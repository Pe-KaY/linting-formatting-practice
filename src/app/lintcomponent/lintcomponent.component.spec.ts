import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LintcomponentComponent } from './lintcomponent.component';

describe('LintcomponentComponent', () => {
  let component: LintcomponentComponent;
  let fixture: ComponentFixture<LintcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LintcomponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LintcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
