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

  ngOnInit(): void {}

  onSubmit(email: Email): void {
    this.emailService.sendEmail(email).subscribe(() => {
      this.showModal = false;
    });
  }
}
