import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AuthService } from '../auth.service';
import { AlertService } from '../../alert/alert.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService, private alertService: AlertService) {}

  ngOnInit() {
  }

  login(form) {
    this.authService.login(form);
  }

  googleLogin() {
    this.authService.googleLogin().then(
      (res) => {
        this.alertService.info('Successfully logged in with Google', 5000, true);
        this.router.navigate(['/dashboard']);
      }
    )
  }

}
