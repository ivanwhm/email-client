import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { SignedInResponse } from '../interfaces/signed-in-response.interface';
import { SigninCredentials } from '../interfaces/signin-credentials.interface';
import { SignupCredentials } from '../interfaces/signup-credentials.interface';
import { SignupResponse } from '../interfaces/signup-response.interface';
import { UsernameAvailableResponse } from '../interfaces/username-available-response.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  rootUrl = 'https://api.angular-email.com/auth';
  signedin$ = new BehaviorSubject(null);

  constructor(private http: HttpClient) {}

  usernameAvailable(username: string): Observable<UsernameAvailableResponse> {
    return this.http.post<UsernameAvailableResponse>(`${this.rootUrl}/username`, {
      username,
    });
  }

  signup(credentials: SignupCredentials): Observable<SignupResponse> {
    return this.http.post<SignupResponse>(`${this.rootUrl}/signup`, credentials).pipe(
      tap(() => {
        this.signedin$.next(true);
      })
    );
  }

  signin(credentials: SigninCredentials): Observable<SignedInResponse> {
    return this.http.post<SignedInResponse>(`${this.rootUrl}/signin`, credentials).pipe(
      tap(() => {
        this.signedin$.next(true);
      })
    );
  }

  signout(): Observable<void> {
    return this.http.post<void>(`${this.rootUrl}/signout`, {}).pipe(
      tap(() => {
        this.signedin$.next(false);
      })
    );
  }

  checkAuth(): Observable<SignedInResponse> {
    return this.http.get<SignedInResponse>(`${this.rootUrl}/signedin`).pipe(
      tap(({ authenticated }) => {
        this.signedin$.next(authenticated);
      })
    );
  }
}
