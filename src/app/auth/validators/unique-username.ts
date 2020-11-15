import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AsyncValidator, FormControl } from '@angular/forms';
import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class UniqueUsername implements AsyncValidator {
  constructor(private readonly http: HttpClient) {}

  validate = (control: FormControl) => {
    const { value } = control;

    return this.http
      .post<any>('https://api.angular-email.com/auth/username', {
        username: value,
      })
      .pipe(
        map((response: any) => {
          if (response.available) {
            return null;
          }
        }),
        catchError((err: any) => {
          if (err.error.username) {
            return of({ nonUniqueUsername: true });
          }
          return of({ noConnection: true });
        })
      );
  };
}
