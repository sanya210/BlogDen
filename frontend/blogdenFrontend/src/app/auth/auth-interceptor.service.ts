import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpParams, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable({
    providedIn:"root"
})
export class AuthInterceptorService implements HttpInterceptor{

    constructor(private authService: AuthService, private activatedRoute: ActivatedRoute){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>  {// allows us to just take 1 observable i.e. user and unsubscribe automatically
        
        // took user obs and unsubscribed after use

        // console.log(!sessionStorage.getItem('token'));
        
            if (!sessionStorage.getItem('token')) {
                return next.handle(req); // initial user being null gives error even before req is sent so we do next
            }
            //const modifiedReq = req.clone({headers: new HttpHeaders().set('Authorization','Bearer '+sessionStorage.getItem( 'token'))})// passing query param to fetch data of currently signed in user
            const modifiedReq = req.clone({
                headers: req.headers.set('Authorization', 'Bearer '+sessionStorage.getItem( 'token'))
            });
            console.log("INterceptor mei hu");
            // console.log(modifiedReq);
            
            return next.handle(modifiedReq);
        
            
            
    }

}