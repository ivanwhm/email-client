import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface UsernameAvailableResponse {
  available: boolean;
}

export interface Credentials {
  username: string;
  password: string;
  passwordConfirmation: string;
}

export interface SignupResponse {
  username: string;
}

const BASE_URL = 'https://api.angular-email.com/auth';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private readonly http: HttpClient) {}

  usernameAvailable(username: string): Observable<UsernameAvailableResponse> {
    return this.http.post<UsernameAvailableResponse>(`${BASE_URL}/username`, {
      username,
    });
  }

  signup(credentials: Credentials): Observable<SignupResponse> {
    return this.http.post<SignupResponse>(`${BASE_URL}/signup`, {
      credentials,
    });
  }
}
