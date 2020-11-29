import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { SignedInResponse } from './interfaces/signed-in-response.interface';
import { SignupCredentials } from './interfaces/signup-credentials.interface';
import { SignupResponse } from './interfaces/signup-response.interface';
import { UsernameAvailableResponse } from './interfaces/username-available-response.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  rootUrl = 'https://api.angular-email.com';
  signedin$ = new BehaviorSubject(false);

  constructor(private http: HttpClient) {}

  usernameAvailable(username: string): Observable<UsernameAvailableResponse> {
    return this.http.post<UsernameAvailableResponse>(`${this.rootUrl}/auth/username`, {
      username,
    });
  }

  signup(credentials: SignupCredentials): Observable<SignupResponse> {
    return this.http.post<SignupResponse>(`${this.rootUrl}/auth/signup`, credentials).pipe(
      tap(() => {
        this.signedin$.next(true);
      })
    );
  }

  checkAuth(): Observable<SignedInResponse> {
    return this.http.get<SignedInResponse>(`${this.rootUrl}/auth/signedin`).pipe(
      tap(({ authenticated }) => {
        this.signedin$.next(authenticated);
      })
    );
  }
}
