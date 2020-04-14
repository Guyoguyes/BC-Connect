import { Component, OnInit } from '@angular/core';
import { LoginCl } from '../class/login-cl';
import { NgForm } from '@angular/forms';
import { RegisterService } from 'src/app/service/register.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


login_cl: LoginCl = {
  email: null,
  password: null,
}

isLoggedIn = false;
isLoginFailed = false;
errorMessage = '';



  constructor(private registerService: RegisterService,
              private router: Router,
              private flashMessages: FlashMessagesService,
              ) { }

  ngOnInit() {
   if(this.registerService.isLoggedIn()){
     this.router.navigateByUrl('/client-profile')
   }


  }

  onLogin(form: NgForm){
    this.registerService.authenticateClient(this.login_cl).subscribe(
      res => {
        this.registerService.setToken(res['token']);
        this.router.navigateByUrl('/client-profile')
      },
      err => {
        console.log(err)
      }
    );
  }
  // onLogin(form: NgForm){
  //   this.registerService.authenticateClient(this.login_cl).subscribe(data =>{
  //     this.tokenStorage.saveToken(data.accessToken);
  //     this.tokenStorage.saveUser(data);

  //     this.isLoginFailed = false;
  //     this.isLoggedIn = true;
  //     this.reloadPage();
  //   }, err => {
  //     this.errorMessage = err.error.message;
  //     this.isLoginFailed = true;
  //   });
  // }

  reloadPage(){
    window.location.reload()
  }

}
