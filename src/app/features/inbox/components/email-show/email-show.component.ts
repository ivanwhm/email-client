import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { EmailService } from '../../services/email.service';

@Component({
  selector: 'app-email-show',
  templateUrl: './email-show.component.html',
  styleUrls: ['./email-show.component.css'],
})
export class EmailShowComponent implements OnInit {
  constructor(
    private readonly route: ActivatedRoute,
    private readonly emailService: EmailService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((snapshot) => this.emailService.getEmail(snapshot.id));
  }
}
