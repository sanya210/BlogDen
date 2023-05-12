import { Component, ViewChild } from '@angular/core';
import { NgForm, Validators} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  description: string;
  profilePic: string;

  @ViewChild('signupForm') form: NgForm;
  signup() {
    console.log(this.form);


    // Access form field values
    this.email = this.form.value.email;
    this.password = this.form.value.password;
    this.firstName = this.form.value.firstName;
    this.lastName = this.form.value.lastName;
    this.description = this.form.value.description;
    this.profilePic = this.form.value.profilePic;

    console.log(this.email);
    console.log(this.form.dirty);
    // Perform further processing with the form field values
    this.form.reset();

  }
}