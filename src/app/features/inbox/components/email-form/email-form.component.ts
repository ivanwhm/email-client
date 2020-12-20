import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Email } from '../../interfaces/email.interface';

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.css'],
})
export class EmailFormComponent implements OnInit {
  @Input() email: Email;

  emailForm: FormGroup;

  constructor() {}

  ngOnInit(): void {
    const { subject, from, to, text } = this.email;
    this.emailForm = new FormGroup({
      from: new FormControl({ value: from, disabled: true }),
      to: new FormControl(to, [Validators.required, Validators.email]),
      subject: new FormControl(subject, [Validators.required]),
      text: new FormControl(text, [Validators.required]),
    });
  }
}
