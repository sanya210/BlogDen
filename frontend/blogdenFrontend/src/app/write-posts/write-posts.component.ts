import { ViewChild } from '@angular/core';
import { NgForm} from '@angular/forms';
import { Component } from '@angular/core';
import { WritePostRequest } from './write-post-request.model';
import { Router, ActivatedRoute } from '@angular/router';
import { timestamp } from 'rxjs';
import { DataStorageService } from '../data-storage.service';

@Component({
  selector: 'app-write-posts',
  templateUrl: './write-posts.component.html',
  styleUrls: ['./write-posts.component.css']
})
export class WritePostsComponent {

  isFormOpen = false;
  title: String;
  category: String;
  description: String;
	error: string = '';

  categories = ['Technology', 'Travel', 'Fashion', 'Food', 'Sports', 'Health','Education','Astronomy','Astrology','Nature','Hobbies'];

  openForm() {
    this.isFormOpen = true;
  }

  constructor(private route: ActivatedRoute, private router: Router, private dataStorageService: DataStorageService) {}

  @ViewChild('postForm') form: NgForm;

  
  submitArticle() {
    // Handle the submission of the article here
    // Perform any necessary operations, e.g., API requests, database updates, etc.
    if(this.title!=='' && this.category!=='' && this.description!==''){
      const request: WritePostRequest = {
        user: {email: sessionStorage.getItem('user')},
        postCategory: this.category, 
        postTitle: this.title,
        postContent: this.description,
        postedOn: new Date(),
        modifiedOn: new Date()
      };
     // console.log(request);
      
      this.dataStorageService.createPost(request).subscribe((result) => {
        //console.log(result);
        },() => {
          this.error = 'Either invalid details or something went wrong';
        });
    }else {
			this.error = 'Invalid Credentials';
		}
   
   // console.log(this.form);
    // Reset the form fields
    this.form.reset();
    this.router.navigate(['/home-page']);
    // Close the form after submission
   // this.isFormOpen = false;
  }
}