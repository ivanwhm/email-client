import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { EMPTY, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Email } from '../interfaces/email.interface';
import { EmailService } from '../services/email.service';

@Injectable({
  providedIn: 'root',
})
export class EmailResolverService implements Resolve<Email> {
  constructor(private readonly emailService: EmailService, private readonly router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Email> {
    const { id } = route.params;

    return this.emailService.getEmail(id).pipe(
      catchError(() => {
        this.router.navigateByUrl('/inbox/not-found');
        return EMPTY;
      })
    );
  }
}
