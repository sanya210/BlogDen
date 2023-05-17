import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { WritePostRequest } from './write-posts/write-post-request.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from './articles/articles.model';
import { CommentRequest } from './comment/comment-request.model';
import { ArticlesService } from './articles/articles.service';


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
  getPostById(id: number): Observable<any>{
    return this.http.get<any>(this.baseUrl + 'post/'+id).pipe(map((respArticle) => {
      console.log(respArticle);
      
			return {postId:respArticle.postId,postTitle:respArticle.postTitle,postCategory:respArticle.postCategory,postContent:respArticle.postContent,postedOn:respArticle.postedOn,modifiedOn:respArticle.modifiedOn, authorName:(respArticle.user.userFirstName+' '+respArticle.user.userLastName),comments:respArticle.commentsList};
		}));
  }
  getAllPosts(){
    return this.http.get<any>(this.baseUrl + 'post').pipe(map((resp) => {
      console.log(resp);
      
			return resp.map( respArticle => {
        return {postId:respArticle.postId,postTitle:respArticle.postTitle,postCategory:respArticle.postCategory,postContent:respArticle.postContent,postedOn:respArticle.postedOn,modifiedOn:respArticle.modifiedOn, authorName:(respArticle.user.userFirstName+' '+respArticle.user.userLastName)};
      });
		}));
  }
  getPostsByUser(){
    return this.http.post<any>(this.baseUrl + 'post/byUser',sessionStorage.getItem('user')).pipe(map((resp) => {
      console.log(resp);
      
			return resp.map( respArticle => {
        return {postId:respArticle.postId,postTitle:respArticle.postTitle,postCategory:respArticle.postCategory,postContent:respArticle.postContent,postedOn:respArticle.postedOn,modifiedOn:respArticle.modifiedOn, authorName:(respArticle.user.userFirstName+' '+respArticle.user.userLastName)};
      });
		}));
}
  createComment(request: CommentRequest): Observable<any>{
    return this.http.post<any>(this.baseUrl + 'comments/add', request).pipe(map((resp) => {
      
			return resp;
		}));
  }
  getUserByEmail(email){
    return this.http.post<any>(this.baseUrl + 'user/byUserEmail', email).pipe(map((resp)=>{
      console.log(resp);
      
      return {userFirstName: resp.userFirstName, userLastName: resp.userLastName, email: resp.email, userPhoto: resp.userPhoto, userDesc: resp.userDesc}
    }))

  }
  // getComments(id: number): Observable<any>{
  //   return this.http.get<any>(this.baseUrl + 'comments/byPostId/' + id).pipe(map((resp) => {
  //     return resp.map(respComment => {
  //       return {commentDesc:respComment.commentDesc, createdAt:respComment.createdAt, authorName:(respComment.user.userFirstName+' '+respComment.user.userLastName), authorEmail:respComment.user.userEmail}
  //     });
  //   }));
  // }
}
