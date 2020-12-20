import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

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
      subject: new FormControl(subject),
      from: new FormControl(from),
      to: new FormControl(to),
      text: new FormControl(text),
    });
  }
}
