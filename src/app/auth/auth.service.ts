import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { SignupCredentials } from './interfaces/signup-credentials.interface';
import { SignupResponse } from './interfaces/signup-response.interface';
import { UsernameAvailableResponse } from './interfaces/username-available-response.interface';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private rootUrl = 'https://api.angular-email.com/auth';

  constructor(private readonly http: HttpClient) {}

  usernameAvailable(username: string): Observable<UsernameAvailableResponse> {
    const uri = `${this.rootUrl}/username`;

    return this.http.post<UsernameAvailableResponse>(uri, {
      username,
    });
  }

  signup(credentials: SignupCredentials): Observable<SignupResponse> {
    const uri = `${this.rootUrl}/signup`;

    return this.http.post<SignupResponse>(uri, {
      credentials,
    });
  }
}
