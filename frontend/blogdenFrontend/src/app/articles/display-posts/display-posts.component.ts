import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataStorageService } from 'src/app/data-storage.service';
import { Article } from '../articles.model';

@Component({
  selector: 'app-display-posts',
  templateUrl: './display-posts.component.html',
  styleUrls: ['./display-posts.component.css']
})
export class DisplayPostsComponent implements OnInit{
  article: Article;
  id: number;//post id

  constructor(private router: Router, private activatedRoute: ActivatedRoute,
    private dataStorageService: DataStorageService){}
 
  ngOnInit(){
    this.activatedRoute.params.subscribe((param)=>{
      this.id=+param['id'];
    })
    // this.article=this.articlesService.getArticleByIndex(this.id);
    this.dataStorageService.getPostById(this.id).subscribe((article)=>{
      this.article=article;
      // console.log(article);
      
    });

  }
  // addComment(){
  //   this.router.navigate(['/comment',this.id]);
  // }
}
