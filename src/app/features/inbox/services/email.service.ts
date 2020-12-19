import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { EmailSummary } from '../interfaces/email-summary.interface';
import { Email } from '../interfaces/email.interface';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  rootUrl = 'https://api.angular-email.com/emails';

  constructor(private readonly httpClient: HttpClient) {}

  getEmails(): Observable<EmailSummary[]> {
    return this.httpClient.get<EmailSummary[]>(`${this.rootUrl}`);
  }

  getEmail(id: string): Observable<Email> {
    return this.httpClient.get<Email>(`${this.rootUrl}/${id}`);
  }
}
