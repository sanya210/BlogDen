import { Component } from '@angular/core';

@Component({
  selector: 'app-write-posts',
  templateUrl: './write-posts.component.html',
  styleUrls: ['./write-posts.component.css']
})
export class WritePostsComponent {

  isFormOpen = false;
  article = {
    title: '',
    category: '',
    description: ''
  };
  categories = ['Technology', 'Travel', 'Fashion', 'Food', 'Sports', 'Health'];

  openForm() {
    this.isFormOpen = true;
  }

  submitArticle() {
    // Handle the submission of the article here
    // You can access the article data using this.article
    // Perform any necessary operations, e.g., API requests, database updates, etc.
    console.log(this.article);
    // Reset the form fields
    this.article = {
      title: '',
      category: '',
      description: ''
    };
    // Close the form after submission
    this.isFormOpen = false;
  }
}