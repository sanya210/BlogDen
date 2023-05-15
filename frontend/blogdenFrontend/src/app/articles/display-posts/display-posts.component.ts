import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataStorageService } from 'src/app/data-storage.service';
import { Article } from '../articles.model';
import { ArticlesService } from '../articles.service';

@Component({
  selector: 'app-display-posts',
  templateUrl: './display-posts.component.html',
  styleUrls: ['./display-posts.component.css']
})
export class DisplayPostsComponent implements OnInit{
  article: Article;
  id: number;

  constructor(private articlesService: ArticlesService, private router: ActivatedRoute, 
    private dataStorageService: DataStorageService){}
  ngOnInit(){
    this.router.params.subscribe((param)=>{
      this.id=+param['id'];
    })
    // this.article=this.articlesService.getArticleByIndex(this.id);
    this.dataStorageService.getPostById(this.id).subscribe((article)=>{
      this.article=article;
    });

  }


}
