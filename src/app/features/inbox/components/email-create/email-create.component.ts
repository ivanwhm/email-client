import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/features/auth/services/auth.service';

import { Email } from '../../interfaces/email.interface';
import { EmailService } from '../../services/email.service';

@Component({
  selector: 'app-email-create',
  templateUrl: './email-create.component.html',
  styleUrls: ['./email-create.component.css'],
})
export class EmailCreateComponent implements OnInit {
  showModal = false;
  email: Email;

  constructor(
    private readonly authService: AuthService,
    private readonly emailService: EmailService
  ) {
    this.email = {
      id: '',
      to: '',
      subject: '',
      html: '',
      text: '',
      from: `${this.authService.username}@angular-email.com`,
    };
  }

  ngOnInit(): void {}

  onSubmit(email: Email): void {
    this.emailService.sendEmail(email).subscribe(({ status }) => {
      if (status) {
        this.showModal = false;
      } else {
        console.error('Email not sent.');
      }
    });
  }
}
