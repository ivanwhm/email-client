import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Email } from '../../interfaces/email.interface';
import { EmailService } from '../../services/email.service';

@Component({
  selector: 'app-email-show',
  templateUrl: './email-show.component.html',
  styleUrls: ['./email-show.component.css'],
})
export class EmailShowComponent implements OnInit {
  email: Email;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly emailService: EmailService
  ) {}

  ngOnInit(): void {
    this.emailService
      .getEmail(this.route.snapshot.params.id)
      .subscribe((email: Email) => console.log(email));
  }
}
