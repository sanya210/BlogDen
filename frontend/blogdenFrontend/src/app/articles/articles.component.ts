import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataStorageService } from '../data-storage.service';
import { Article } from './articles.model';
import { ArticlesService } from './articles.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit{
 // showFullContent = false;
 articles: Article[];
  
  constructor(private articlesService: ArticlesService, private router: Router,
    private dataStorageService: DataStorageService){}

 // articles: Articles= this.articlesService.articles;
  ngOnInit(){
    // this.articlesService.subscribe((this.articles:Article[]) =>{
    //this.articles = this.articlesService.getArticles();
    this.dataStorageService.getAllPosts().subscribe((posts:Article[])=>{
      this.articles=posts;
    });
    // })
  }

  showFullContent(index:number){
   // this.articlesService.getArticleByIndex(index);
    this.router.navigate(['/articles',index+1]);
  }
}
