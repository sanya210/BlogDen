import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, Validators} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { Request } from '../request.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  email: string;
  password: string;

 isSignedin = false;

	error: string = '';

	constructor(private route: ActivatedRoute, private router: Router, private authService: AuthService) {}

	ngOnInit() {
		this.isSignedin = this.authService.isUserSignedin();

		if(this.isSignedin) {
			this.router.navigateByUrl('home');
		}
	}
  @ViewChild('loginForm') form: NgForm;

	login() {
		if(this.email !== '' && this.email !== null && this.password !== '' && this.password !== null) {
			const request: Request = { userEmail: this.email, userPassword: this.password};

			this.authService.signin(request).subscribe((result)=> {
				//this.router.navigate(['/home']);
        console.log(result);
        this.router.navigate(['/home-page']);
			}, () => {
				this.error = 'Either invalid credentials or something went wrong';
			});
		} else {
			this.error = 'Invalid Credentials';
		}
    console.log(this.form);
    this.form.reset();

	}

  // @ViewChild('loginForm') form: NgForm;
  // login(){

  //   this.router.navigate(['/home-page']);
  //   console.log(this.form);
  //   // this.email = this.form.value.email;
  //   // this.password = this.form.value.password;

  //   this.form.reset();

  // }
}
