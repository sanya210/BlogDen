import { Component, ViewChild } from '@angular/core';
import { NgForm, Validators} from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string;
  password: string;

  constructor(private router: Router){}

  @ViewChild('loginForm') form: NgForm;
  login(){
    this.router.navigate(['/home-page']);
    console.log(this.form);
    this.email = this.form.value.email;
    this.password = this.form.value.password;

    this.form.reset();

  }
}
