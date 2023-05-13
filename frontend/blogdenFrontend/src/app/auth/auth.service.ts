import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Request } from '../request.model';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://localhost:8080/api/auth/';

	constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient) { }

	signin(request: Request): Observable<any> {
		return this.http.post<any>(this.baseUrl + 'authenticate', request, {headers: new HttpHeaders({ 'Content-Type': 'application/json' })}).pipe(map((resp) => {
			sessionStorage.setItem('user', request.userEmail);
      // console.log(resp);
      
			sessionStorage.setItem('token', resp.access_token);
			return resp;
		}));
	}

	signup(request: Request): Observable<any> {
		return this.http.post<any>(this.baseUrl + 'signup', request, {headers: new HttpHeaders({ 'Content-Type': 'application/json' }), responseType: 'text' as 'json'}).pipe(map((resp) => {                                                         
			return resp;
		}));
	}

	signout(): Observable<any> {
    // const token = sessionStorage.getItem('token'); // Get the token from sessionStorage
    // const headers = { 'Authorization': 'Bearer ' + token}; // Add the token as "Bearer token" in the headers
    // const thheader = {headers: new HttpHeaders(headers)};

    // Send a POST request to '/logout' with the token in the request headers
    return this.http.post<any>(this.baseUrl + 'logout', null);
  }

	isUserSignedin() {
		return sessionStorage.getItem('token') !== null;
	}

	getSignedinUser() {
		return sessionStorage.getItem('user') as string;
	}

	getToken() {
		let token = sessionStorage.getItem('token') as string;
		return token;
	}
}
