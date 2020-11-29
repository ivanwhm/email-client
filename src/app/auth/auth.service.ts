import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { SignedInResponse } from './interfaces/signed-in-response.interface';
import { SignupCredentials } from './interfaces/signup-credentials.interface';
import { SignupResponse } from './interfaces/signup-response.interface';
import { UsernameAvailableResponse } from './interfaces/username-available-response.interface';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private rootUrl = 'https://api.angular-email.com/auth';
  signedIn$ = new BehaviorSubject(false);

  constructor(private readonly http: HttpClient) {}

  usernameAvailable(username: string): Observable<UsernameAvailableResponse> {
    const uri = `${this.rootUrl}/username`;

    return this.http.post<UsernameAvailableResponse>(uri, { username });
  }

  signup(credentials: SignupCredentials): Observable<SignupResponse> {
    const uri = `${this.rootUrl}/signup`;

    return this.http.post<SignupResponse>(uri, credentials).pipe(
      tap(() => {
        this.signedIn$.next(true);
      })
    );
  }

  checkAuth(): Observable<SignedInResponse> {
    const uri = `${this.rootUrl}/signedin`;

    return this.http.get<SignedInResponse>(uri).pipe(tap(() => {}));
  }
}
