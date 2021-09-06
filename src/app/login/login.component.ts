import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseauthserviceService } from '../firebaseauthservice.service';
import { FirebaseService } from '../s';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isSign = false;
  isaddd = false;
  constructor(public services: FirebaseauthserviceService, public router : Router) { }

  ngOnInit() {
    if (localStorage.getItem('user') !== null)
      this.isSign = true
    else
      this.isSign=false
  }
    async signin(email: string, password: string) {
    await  this.services.sigin(email, password)
     if (this.services.islogin) {
      
         this.isSign = true
       
     }
    
  }
  
  handlelogout() {
    this.isSign = false;
  }
  handle() {
    this.isaddd = true;
  }
  handle1() {
    this.isaddd = false;
  }

}
