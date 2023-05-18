import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataStorageService } from 'src/app/data-storage.service';
import { User } from 'src/app/user-profile/user.model';
import { Article } from '../articles.model';
import { ArticlesService } from '../articles.service';

@Component({
  selector: 'app-display-posts',
  templateUrl: './display-posts.component.html',
  styleUrls: ['./display-posts.component.css']
})
export class DisplayPostsComponent implements OnInit{
  article: Article;
  id: number;//post id
  

  constructor(private router: Router, private activatedRoute: ActivatedRoute,
    private dataStorageService: DataStorageService, private articleService:ArticlesService){}
 
  ngOnInit(){
    this.activatedRoute.params.subscribe((param)=>{
      this.id=+param['id'];
      // this.articleService.getArticleByIndex(this.id);
    })
    // this.article=this.articlesService.getArticleByIndex(this.id);
    this.dataStorageService.getPostById(this.id).subscribe((article)=>{
      this.article=article;
      // console.log(article);
      
    });
    

  }

  getAuthor(email:String){
    this.dataStorageService.getUserByEmail(email).subscribe(user=>{
      this.router.navigate(['/profile',user.userId]);
    })
    
  }

  // addComment(){
  //   this.router.navigate(['/comment',this.id]);
  // }
}
