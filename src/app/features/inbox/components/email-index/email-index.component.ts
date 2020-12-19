import { Component, OnInit } from '@angular/core';

import { EmailSummary } from '../../interfaces/email-summary.interface';
import { EmailService } from '../../services/email.service';

@Component({
  selector: 'app-email-index',
  templateUrl: './email-index.component.html',
  styleUrls: ['./email-index.component.css'],
})
export class EmailIndexComponent implements OnInit {
  emails: EmailSummary[] = [];

  constructor(private readonly emailService: EmailService) {}

  ngOnInit(): void {
    this.emailService.getEmails().subscribe((emails: EmailSummary[]) => (this.emails = emails));
  }
}
