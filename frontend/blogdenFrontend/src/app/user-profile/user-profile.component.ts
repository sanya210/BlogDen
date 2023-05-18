import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from '../articles/articles.model';
import { DataStorageService } from '../data-storage.service';
import { followRequest } from './follow-request.model';
import { User } from './user.model';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit{
  user:User;
  articles: Article[];
  userId:number=null;
  email:String;
  followers: User[];
  followersCount:number;
  followingCount:number;
  following: User[];
  isFollowing:boolean;
  notSelf: boolean;
  follow: followRequest;
  constructor(private dataStorageService: DataStorageService, private router: Router, private activatedRoute: ActivatedRoute){}
  ngOnInit(){
    
    this.activatedRoute.params.subscribe(param =>{
      this.userId=+param['id'];
      // console.log(+param['id'],this.userId);
      
    })
    // if opening someone else's profile
    if(this.userId){
      console.log("if");
      
      this.dataStorageService.getUserById(this.userId).subscribe((user)=>{
        this.user=user;
        this.email=user.email;
        this.notSelf= this.email !== sessionStorage.getItem('user')
        console.log(this.user);
        console.log(this.email);
        this.getPosts();
        this.getFollowers();
        this.getFollowing();
        // if(this.isFollowingUser())
        // {
        //   this.isFollowing=true;
        // }
        // this.isFollowingUser(this.followers);
      });
    }
    // if opening own profile
    else{
      // console.log(this.userId)
      this.dataStorageService.getUserByEmail(sessionStorage.getItem('user')).subscribe((user)=>{
        this.user=user;
        this.email=user.email;
        this.notSelf=false;
        this.getPosts();
        this.getFollowers();
        this.getFollowing();
      });
    }
  
  }
  showFullContent(index:number){
    // this.articlesService.getArticleByIndex(index);
     this.router.navigate(['/articles',index]);
   }
   getPosts(){
    this.dataStorageService.getPostsByUser(this.email).subscribe((posts:Article[])=>{
      
      this.articles = posts;
      // console.log(this.articles);
      
    });
   }
   getFollowers(){
    console.log("here");
    
    this.dataStorageService.getFollowers(this.user.userId).subscribe((followers: User[])=>{
      this.followers = followers;
      this.followersCount = this.followers.length;
      for(var follower of followers){
        if(follower.userId===+sessionStorage.getItem('UserId')){
          this.isFollowing = true;
        }
      }
      this.isFollowingUser(this.followers);

      console.log("followers",this.followers);
      
      console.log(this.followers.length);
      
      
    })
   }
   getFollowing(){
    console.log("here2");
    
    this.dataStorageService.getFollowing(this.user.userId).subscribe((following: User[])=>{
      this.following = following;
      this.followingCount = this.following.length;
      console.log(this.following.length);
            
    })
}
    isFollowingUser(followers:User[]){
      // console.log('yaha par',followers);
      
        const userEmail = sessionStorage.getItem('user');
        const isUserInFollowers = followers.some(follower => follower.email === userEmail);
        // console.log(isUserInFollowers);
        
        if(isUserInFollowers)
        this.isFollowing=true;
      // if(this.followers.map((follower: User)=>{
      //   if(this.follower.userId == userEmail)
      //   this.isFollowing=true;

      // }))
    }
    followUnfollow(id:number){
      this.isFollowing = !this.isFollowing;
      if(!this.isFollowing)
      {
        this.dataStorageService.deleteFollow(+sessionStorage.getItem('UserId'),this.userId).subscribe((resp)=>{
          console.log(resp);
          // console.log(this.following);
          this.followersCount-=1;
        })

      }
      else{
      this.dataStorageService.addFollow(+sessionStorage.getItem('UserId'),this.userId).subscribe((resp)=>{
        console.log(resp);
        this.followersCount+=1;
        // this.isFollowing = true;
      })
    }
    }
}

