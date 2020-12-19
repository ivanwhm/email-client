import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { skipWhile, take, tap } from 'rxjs/operators';

import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanLoad {
  constructor(private readonly authService: AuthService, private readonly router: Router) {}

  canLoad(): Observable<boolean> {
    return this.authService.signedin$.pipe(
      skipWhile((value) => value === null),
      take(1),
      tap((authenticated: boolean) => {
        if (!authenticated) {
          this.router.navigateByUrl('/');
        }
      })
    );
  }
}
