import { Component, Input, OnInit } from '@angular/core';

import { Email } from '../../interfaces/email.interface';
import { EmailService } from '../../services/email.service';

@Component({
  selector: 'app-email-reply',
  templateUrl: './email-reply.component.html',
  styleUrls: ['./email-reply.component.css'],
})
export class EmailReplyComponent implements OnInit {
  @Input() email: Email;
  showModal = false;

  constructor(private readonly emailService: EmailService) {}

  ngOnInit(): void {
    const text = this.email.text.replace(/\n/gi, '\n> ');
    this.email = {
      ...this.email,
      from: this.email.to,
      to: this.email.from,
      subject: `Re: ${this.email.subject}`,
      html: `\n\n\n-------- ${this.email.from} wrote:\n>${text}`,
      text: `\n\n\n-------- ${this.email.from} wrote:\n>${text}`,
    };
  }

  onSubmit(email: Email): void {
    this.emailService.sendEmail(email).subscribe(() => {
      this.showModal = false;
    });
  }
}
