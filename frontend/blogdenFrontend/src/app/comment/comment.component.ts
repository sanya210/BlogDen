import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataStorageService } from '../data-storage.service';
import { CommentRequest } from './comment-request.model';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  commentDesc: string;
  id: number; //post id
  error: string = '';
  isFormOpen = false;

  openForm() {
    this.isFormOpen = true;
  }

  constructor(private router: Router, private activatedRoute: ActivatedRoute,
    private dataStorageService: DataStorageService){}

  ngOnInit(){
      this.activatedRoute.params.subscribe((param)=>{
        this.id=+param['id'];
        console.log('inside comment component');
        
      })
  }
 

  writeComment(form){
    if(form.value.commentDesc!==''){
      const request: CommentRequest ={
        commentDesc: form.value.commentDesc,
        createdAt: new Date(),
        user: {email: sessionStorage.getItem('user')},
        post: {postId: this.id}
      };
      console.log(request,'print kar');

      this.dataStorageService.createComment(request).subscribe((result)=>{
        console.log(result);
        },() => {
          this.error = 'Either invalid details or something went wrong';
        });
    }else {
			this.error = 'Invalid Credentials';
		}
    
    console.log(form);
    form.reset();
    this.isFormOpen = false;
    this.router.navigate(['/articles',this.id])
  }
}