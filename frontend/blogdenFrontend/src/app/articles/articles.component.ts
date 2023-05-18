import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataStorageService } from '../data-storage.service';
import { Article } from './articles.model';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit{
 // showFullContent = false;
 articles: Article[];
  
  constructor(private router: Router,
    private dataStorageService: DataStorageService){}

 // articles: Articles= this.articlesService.articles;
  ngOnInit(){
    // this.articlesService.subscribe((this.articles:Article[]) =>{
    //this.articles = this.articlesService.getArticles();
    this.dataStorageService.getAllPosts().subscribe((posts:Article[])=>{
      this.articles=posts;
      console.log(posts);
      
    });
    // })
  }

  showFullContent(index:number){
   // this.articlesService.getArticleByIndex(index);
    this.router.navigate(['/articles',index]);
  }
  getAuthor(id:number){
    this.router.navigate(['/profile',id]);
  }
}
