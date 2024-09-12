import { Component } from '@angular/core';

@Component({
  selector: 'app-lintcomponent',
  standalone: true,
  imports: [],
  templateUrl: './lintcomponent.component.html',
  styleUrl: './lintcomponent.component.css'
})
export class LintcomponentComponent {

  message: string;

  constructor() {
    this.message = 'Hello, this component follows linting and formatting rules!';
  }

  ngOnInit(): void {}

  displayMessage(): string {
    return this.message;
  }
}
