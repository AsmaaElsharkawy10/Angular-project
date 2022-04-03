import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthenticationService } from './../authentication.service';
import { User } from './../_models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,OnDestroy {

  user:User= new User("","")
  sub:Subscription|null=null
  constructor(public authService:AuthenticationService) { }
 
   login()
   {
    this.sub =  this.authService.login(this.user).subscribe(user=>{
       console.log(user)
       localStorage.setItem("token",(<any>user).token)
     })
   }
  ngOnInit(): void {
  }
  ngOnDestroy(): void {
    this.sub?.unsubscribe()
   }

}
