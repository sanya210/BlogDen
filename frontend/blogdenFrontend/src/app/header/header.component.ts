import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
constructor(private authService: AuthService, private router:Router){

}
logout(){
  this.authService.signout().subscribe(()=>{
    console.log("logout krne de bhai",sessionStorage.getItem('token'));
      
      sessionStorage.clear();
      // sessionStorage.removeItem('user');
      // sessionStorage.removeItem('token');
      this.router.navigateByUrl('/login');
  });
}
}
