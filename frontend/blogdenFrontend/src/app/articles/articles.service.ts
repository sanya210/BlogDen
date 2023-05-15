import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from './articles.model';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  private baseUrl = 'http://localhost:8080/api/';

	constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient) { }
  private index:Number;

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

  getArticles(){
    return this.articles.slice();
  }
  getArticleByIndex(index:number){
    return this.articles[index];
  }
 
}
