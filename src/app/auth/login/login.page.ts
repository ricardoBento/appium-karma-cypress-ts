import { NotificationsService } from './../../services/notifications.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { AuthService } from 'src/app/services/auth.service';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  errorMessage;
  non_field_errors;
  email_errors;
  message;
  constructor(
    public formBuilder: FormBuilder,
    private auth: AuthService,
    private storage: Storage,
    private router: Router,
    private config: ConfigService,
    private elementRef: ElementRef
  ) {
    this.loginForm = formBuilder.group({
      email: ["", Validators.compose([Validators.required])],
      password: ["", Validators.compose([Validators.required])]
    });
  }
  ionViewWillEnter() {
    // this.config.getConfig();
  }
  ngAfterViewInit() {
    // this.elementRef.nativeElement.querySelector('#showHideButton').addEventListener('click', {this.onClick.bind(this)});
    this.elementRef.nativeElement.querySelector('#showHideButton').addEventListener('click', () => {
      this.elementRef.nativeElement.querySelector('#textBox').classList.toggle('hidden');
    });
  }
  ngOnInit() {
    //   document.addEventListener('DOMContentLoaded', function() {
    //     document.querySelector('#showHideButton').addEventListener('click', function() {
    //         document.querySelector('#textBox').classList.toggle('hidden');
    //     });
    // });
  }
  onSubmit() {
    const logged_user = this.loginForm.value.email;
    if (this.loginForm.valid) {
      return this.auth.appLogin(this.loginForm).subscribe(token => {
        if (token) {
          this.storage.set("token", token["key"]).then(() => {
            this.storage.set("loggedUser", logged_user);
            this.router.navigateByUrl("home");
          });
        } else {
          this.router.navigateByUrl("login");
        }
      },
        error => {
          this.handleError(error);
        }
      );
    } else {
      Object.keys(this.loginForm.controls).forEach(field => {
        const control = this.loginForm.get(field);
        control.markAsTouched({ onlySelf: true });
      });
    }
  }
  handleError(error: HttpErrorResponse) {
    this.non_field_errors = "";
    this.email_errors = "";
    if (error.status === 400 && error.error.non_field_errors) {
      this.non_field_errors = error.error.non_field_errors;
    }
    if (error.status === 400 && error.error.email) {
      this.email_errors = error.error.email;
    }
  }
  register() {
    this.router.navigateByUrl("register");
  }
  passReset() {
    this.router.navigateByUrl("pass-reset");
  }
}
