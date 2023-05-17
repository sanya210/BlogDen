import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from '../articles/articles.model';
import { DataStorageService } from '../data-storage.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit{
  user:any;
  articles: Article[];
  
  constructor(private dataStorageService: DataStorageService, private router: Router){}
  ngOnInit(){
    const email = sessionStorage.getItem('user');//getting user email for current logged in user
    
    this.dataStorageService.getUserByEmail(email).subscribe((user)=>{
      this.user=user;
    });
    this.dataStorageService.getPostsByUser().subscribe((posts:Article[])=>{
      this.articles = posts;
      console.log(this.articles);
      
    });
  }
  showFullContent(index:number){
    // this.articlesService.getArticleByIndex(index);
     this.router.navigate(['/articles',index]);
   }
}

