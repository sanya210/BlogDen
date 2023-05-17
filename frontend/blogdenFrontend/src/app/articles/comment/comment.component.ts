import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from '../articles.model';
import { ArticlesService } from '../articles.service';
import { DataStorageService } from '../../data-storage.service';
import { CommentRequest } from './comment-request.model';
import { Comment } from '../comment.model';
import { User } from 'src/app/user-profile/user.model';

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
  user:User;
  @Input() article:Article;
  openForm() {
    this.isFormOpen = true;
  }

  constructor(private router: Router, private activatedRoute: ActivatedRoute,
    private dataStorageService: DataStorageService,private articleService:ArticlesService){}

  ngOnInit(){
      this.activatedRoute.params.subscribe((param)=>{
        this.id=+param['id'];
        console.log('inside comment component');
        
      })
      console.log(this.article);
      this.dataStorageService.getUserByEmail(sessionStorage.getItem('user')).subscribe(user=>{
        this.user = user;
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
      const comment: Comment ={
        commentDesc: form.value.commentDesc,
        createdOn: new Date(),
        user: {userFirstName:this.user.userFirstName,
          userLastName:this.user.userLastName,email: sessionStorage.getItem('user')},
        post: {postId: this.id}
      };
      console.log(request,'print kar');
      this.article.comments.push(comment);
      this.dataStorageService.createComment(request).subscribe((result)=>{
        console.log(result);
        },() => {
          this.error = 'Either invalid details or something went wrong';
        });
    }else {
			this.error = 'Invalid Credentials';
		}
    
    // this.dataStorageService.getPostById(this.id).subscribe((article)=>{
    //   this.article=article;
    //   console.log(article);
      
    // });
    // this.articleService.setArticle(this.article);   
    console.log(form);
    form.reset();
    this.isFormOpen = false;
    this.router.navigate(['/articles',this.id])
  }
}