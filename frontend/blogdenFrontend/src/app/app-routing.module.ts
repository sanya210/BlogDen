import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesComponent } from './articles/articles.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DisplayPostsComponent } from './articles/display-posts/display-posts.component';
import { WritePostsComponent } from './write-posts/write-posts.component';
import { CommentComponent } from './articles/comment/comment.component';
import { UserProfileComponent } from './user-profile/user-profile.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'home-page', component: HomePageComponent},
  { path: 'write-posts', component: WritePostsComponent},
  { path: 'articles', component: ArticlesComponent},
  { path: 'articles/:id', component: DisplayPostsComponent},
  { path: 'comment', component: CommentComponent},
  { path: 'profile', component: UserProfileComponent},
  { path:'profile/:id', component:UserProfileComponent}
  // Add other routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
