import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { WritePostRequest } from './write-posts/write-post-request.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from './articles/articles.model';
import { CommentRequest } from './articles/comment/comment-request.model';
import { ArticlesService } from './articles/articles.service';
import { followRequest } from './user-profile/follow-request.model';

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
      // console.log(respArticle);
      
			return {postId:respArticle.postId,postTitle:respArticle.postTitle,postCategory:respArticle.postCategory,postContent:respArticle.postContent,postedOn:respArticle.postedOn,modifiedOn:respArticle.modifiedOn, authorName:(respArticle.user.userFirstName+' '+respArticle.user.userLastName),comments:respArticle.commentsList};
		}));
  }
  getAllPosts(){
    return this.http.get<any>(this.baseUrl + 'post').pipe(map((resp) => {
      // console.log(resp);
      
			return resp.map( respArticle => {
        return {postId:respArticle.postId,postTitle:respArticle.postTitle,postCategory:respArticle.postCategory,postContent:respArticle.postContent,postedOn:respArticle.postedOn,modifiedOn:respArticle.modifiedOn, authorName:(respArticle.user.userFirstName+' '+respArticle.user.userLastName),authorId: respArticle.user.userId};
      });
		}));
  }
  getPostsByUser(email:String): Observable<any>{
    // console.log(email);
    
    return this.http.post<any>(this.baseUrl + 'post/byUser',email).pipe(map((resp) => {
      // console.log(resp);
      
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
      
      return {userId:resp.userId,userFirstName: resp.userFirstName, userLastName: resp.userLastName, email: resp.email, userPhoto: resp.userPhoto, userDesc: resp.userDesc}
    }))}
  getUserById(id:number){
    return this.http.get<any>(this.baseUrl + 'user/'+id).pipe(map((resp)=>{
      // console.log(resp);
      
      return {userId:resp.userId,userFirstName: resp.userFirstName, userLastName: resp.userLastName, email: resp.email, userPhoto: resp.userPhoto, userDesc: resp.userDesc}
    }))
  }
  getFollowers(id:number){
    console.log('in ds getfollowers');
    
    return this.http.get<any>(this.baseUrl + 'follow/getFollowers/'+id).pipe(map((resp)=>{
      console.log(resp);
      return resp.map(respUser => {
        console.log(respUser);
        
        return {userId: respUser.userId, userFirstName: respUser.userFirstName, userLastName: respUser.userLastName, email: respUser.email, userPhoto: respUser.userPhoto, userDesc: respUser.userDesc}
      })
      
    }))
  }
  getFollowing(id:number){
    console.log('in ds getfollowing');
    
    return this.http.get<any>(this.baseUrl + 'follow/getFollowing/'+id).pipe(map((resp)=>{
      console.log(resp);
      return resp.map(respUser => {
        console.log(respUser);
        
        return {userId: respUser.userId, userFirstName: respUser.userFirstName, userLastName: respUser.userLastName, email: respUser.email, userPhoto: respUser.userPhoto, userDesc: respUser.userDesc}
      })
      
    }))
  }
  addFollow(followerId:number,followeeId:number): Observable<any>{

    console.log(followerId,followeeId);
    
    return this.http.get<any>(this.baseUrl + 'follow/save?followerId='+followerId+'&followeeId='+followeeId).pipe(map((resp) => {
      return resp;
    }))
  }
  deleteFollow(followerId:number,followeeId:number): Observable<any>{
    let httpParams = new HttpParams();
    httpParams.append('followerId',followerId);
    httpParams.append('followeeId',followeeId);
    console.log(this.http.post<any>(this.baseUrl + 'follow/delete',  httpParams));
    
    return this.http.get<any>(this.baseUrl + 'follow/delete?followerId='+followerId+'&followeeId='+followeeId).pipe(map((resp) => {
      return resp;
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
