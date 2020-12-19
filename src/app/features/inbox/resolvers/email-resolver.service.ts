import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';

import { Email } from '../interfaces/email.interface';
import { EmailService } from '../services/email.service';

@Injectable({
  providedIn: 'root',
})
export class EmailResolverService implements Resolve<Email> {
  constructor(private readonly emailService: EmailService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Email> {
    const { id } = route.params;

    return this.emailService.getEmail(id);
  }
}
