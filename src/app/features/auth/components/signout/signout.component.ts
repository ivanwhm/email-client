import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../auth.service';

@Component({
  templateUrl: './signout.component.html',
  styleUrls: ['./signout.component.css'],
})
export class SignoutComponent implements OnInit {
  constructor(private readonly authService: AuthService) {}

  ngOnInit(): void {
    this.authService.signout().subscribe(() => {
      // Navigate de user back to a signin page
    });
  }
}
