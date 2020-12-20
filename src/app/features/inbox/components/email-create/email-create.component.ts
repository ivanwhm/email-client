import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-email-create',
  templateUrl: './email-create.component.html',
  styleUrls: ['./email-create.component.css'],
})
export class EmailCreateComponent implements OnInit {
  showModal = false;
  email = {
    id: '',
    to: '',
    subject: '',
    html: '',
    text: '',
    from: 'ivanwhm4@angular-email.com',
  };

  constructor() {}

  ngOnInit(): void {}
}
