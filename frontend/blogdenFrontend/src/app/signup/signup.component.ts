import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, Validators} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { SignupRequest } from './signup-request.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  description: string;
  profilePic: string;
  error: string = '';

  isSignedUp = false;

  constructor(private route: ActivatedRoute, private router: Router, private authService: AuthService) {}

  ngOnInit(){
    this.isSignedUp = this.authService.isUserSignedUp();

		if(this.isSignedUp) {
			this.router.navigateByUrl('home');
		}
  }


  //@ViewChild('signupForm') form: NgForm;
  signup(form) {
    if(form.value.email !== '' && form.value.password !== '' && form.value.firstName !== '' && form.value.lastName !== '' && form.value.description !== '' && form.value.profilePic !== ''){
      const request: SignupRequest = {email: form.value.email, userPassword: form.value.password, userFirstName: form.value.firstName, userLastName: form.value.lastName, userDesc: form.value.description, userPhoto: form.value.profilePic};
      this.authService.signup(request).subscribe((result)=> {
				//this.router.navigate(['/home']);
        console.log(result);
        this.router.navigate(['/home-page']);
			}, () => {
				this.error = 'Either invalid credentials or something went wrong';
			});
		} else {
			this.error = 'Invalid Credentials';
		}
    console.log(form);


    // // Access form field values
    // this.email = this.form.value.email;
    // this.password = this.form.value.password;
    // this.firstName = this.form.value.firstName;
    // this.lastName = this.form.value.lastName;
    // this.description = this.form.value.description;
    // this.profilePic = this.form.value.profilePic;

    // console.log(this.email);
    // console.log(this.form.dirty);
    // // Perform further processing with the form field values
    form.reset();

  }
}