import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from '../articles/articles.model';
import { ArticlesService } from '../articles/articles.service';
import { DataStorageService } from '../data-storage.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit{
    constructor(private dataStorageService: DataStorageService,private router:Router){}
  
    articles: Article[];

    ngOnInit(): void {
      // this.dataStorageService.getPostsByUser().subscribe((posts:Article[])=>{
      //   this.articles = posts;
      //   console.log(this.articles);
        
      // })

      this.dataStorageService.getUserByEmail(sessionStorage.getItem('user')).subscribe(resp=>{
        sessionStorage.setItem('UserId',  resp.userId);
      })
    }
    showFullContent(index:number){
      // this.articlesService.getArticleByIndex(index);
       this.router.navigate(['/articles',index]);
     }
   }


