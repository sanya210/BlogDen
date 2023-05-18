import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from './articles.model';
import { DataStorageService } from '../data-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  private baseUrl = 'http://localhost:8080/api/';

	constructor(private route: ActivatedRoute, private router: Router, private dataStorageService:DataStorageService) { }
  private index:Number;

  ArticleChanged = new Subject<Article>();
  article:Article;

  private articles: Article[] = [
    // new Article('My First Article',
    // 'Technology',
    // 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend, odio eu congue molestie, elit nibh vestibulum urna, eget condimentum velit nulla ut tellus.jcvwudvwbdxjwvdjwjdwev',
    // new Date(),
    // new Date()
    // ),
    // new Article('My Second Article',
    // 'Science',
    // 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend, odio eu congue molestie, elit nibh vestibulum urna, eget condimentum velit nulla ut tellus.jcvwudvwbdxjwvdjwjdwev',
    // new Date(),
    // new Date()),
    // new Article('My Third Article',
    // 'Fashion',
    // 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend, odio eu congue molestie, elit nibh vestibulum urna, eget condimentum velit nulla ut tellus.jcvwudvwbdxjwvdjwjdwev',
    // new Date(),
    // new Date())
  ];

  setArticle(article: Article) {
    this.article = article;
    this.ArticleChanged.next(this.article);//emitting an event when recipes changed and this will be subscribed by recipe-list
  }

  getArticles(){
    return this.articles.slice();
  }
  getArticleByIndex(id:number){
    this.dataStorageService.getPostById(id).subscribe((article)=>{
      this.article=article;
      // console.log(article);
      
    });
    return this.article ;
  }
 
}
