import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AsyncValidator, FormControl, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UniqueUsername implements AsyncValidator {
  constructor(private readonly http: HttpClient) {}

  validate(control: FormControl): Observable<ValidationErrors> {
    const { value } = control;

    return null;
  }
}
