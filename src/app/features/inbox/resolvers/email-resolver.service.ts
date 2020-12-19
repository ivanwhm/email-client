import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { Email } from '../interfaces/email.interface';
import { EmailService } from '../services/email.service';

@Injectable({
  providedIn: 'root',
})
export class EmailResolverService implements Resolve<Email> {
  constructor(private readonly emailService: EmailService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Email> {
    return route.params.pipe(switchMap(({ id }) => this.emailService.getEmail(id)));
  }
}
