import { Component, Input, OnInit } from '@angular/core';
import { FormControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  @Input() id: string;
  @Input() label: string;
  @Input() inputType: string;
  @Input() control: FormControl;

  constructor() {}

  ngOnInit(): void {}

  showErrors(): ValidationErrors {
    const { dirty, touched, errors } = this.control;
    return dirty && touched && errors;
  }
}
