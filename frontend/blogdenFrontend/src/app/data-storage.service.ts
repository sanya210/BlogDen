import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { WritePostRequest } from './write-posts/write-post-request.model';
import { ActivatedRoute, Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  private baseUrl = 'http://localhost:8080/';

	constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient) { }

  createPost(request: WritePostRequest): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'post/add', request, {headers: new HttpHeaders({ 'Content-Type': 'application/json' })}).pipe(map((resp) => {
      
			// sessionStorage.setItem('user', request.userEmail);
      // console.log(resp);
      
			// sessionStorage.setItem('token', resp.access_token);
			return resp;
		}));
  }
}
