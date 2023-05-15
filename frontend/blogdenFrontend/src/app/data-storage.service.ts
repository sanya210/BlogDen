import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { WritePostRequest } from './write-posts/write-post-request.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from './articles/articles.model';


@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  private baseUrl = 'http://localhost:8080/api/';

	constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient) { }

  createPost(request: WritePostRequest): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'post/add', request).pipe(map((resp) => {
      
			// sessionStorage.setItem('user', request.userEmail);
      // console.log(resp);
      
			// sessionStorage.setItem('token', resp.access_token);
			return resp;
		}));
  }
  getPostById(id: number): Observable<Article>{
    return this.http.get<any>(this.baseUrl + 'post/'+id).pipe(map((resp) => {
      

			return resp;
		}));
  }
  getAllPosts(){
    return this.http.get<Article[]>(this.baseUrl + 'post').pipe(map((resp) => {
      console.log(resp);
      
			return resp.map( respArticle => {
        return {postTitle:respArticle.postTitle,postCategory:respArticle.postCategory,postContent:respArticle.postContent,postedOn:respArticle.postedOn,modifiedOn:respArticle.modifiedOn};
      });
		}));
  }
  getPostsByUser(){
    return this.http.post<Article[]>(this.baseUrl + 'post/byUser',sessionStorage.getItem('user')).pipe(map((resp) => {
      console.log(resp);
      
			return resp.map( respArticle => {
        return {postTitle:respArticle.postTitle,postCategory:respArticle.postCategory,postContent:respArticle.postContent,postedOn:respArticle.postedOn,modifiedOn:respArticle.modifiedOn};
      });
		}));
}}
