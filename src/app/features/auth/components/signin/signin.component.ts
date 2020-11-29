import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent {
  signinForm = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
      Validators.pattern(/^[a-z0-9]+$/),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20),
    ]),
  });

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(): void {
    if (this.signinForm.invalid) {
      return;
    }

    this.authService.signin(this.signinForm.value).subscribe({
      next: () => {
        this.router.navigateByUrl('/inbox');
      },
      error: ({ status }) => {
        if (!status) {
          this.signinForm.setErrors({ noConnection: true });
        } else {
          this.signinForm.setErrors({ invalidLoggingInformation: true });
        }
      },
    });
  }
}
