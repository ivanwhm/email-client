import { Injectable } from '@angular/core';
import { CanLoad } from '@angular/router';
import { Observable } from 'rxjs';
import { skipWhile, take } from 'rxjs/operators';

import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanLoad {
  constructor(private readonly authService: AuthService) {}

  canLoad(): Observable<boolean> {
    return this.authService.signedin$.pipe(
      skipWhile((value) => value === null),
      take(1)
    );
  }
}
