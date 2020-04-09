import { Component, OnInit } from '@angular/core';
import { LoginCl } from '../class/login-cl';
import { NgForm } from '@angular/forms';
import { RegisterService } from 'src/app/service/register.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { TokenStorageService } from 'src/app/service/token-storage.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


login_cl: LoginCl = {
  email: '',
  password: '',
}

isLoggedIn = false;
isLoginFailed = false;
errorMessage = '';



  constructor(private registerService: RegisterService,
              private router: Router,
              private flashMessages: FlashMessagesService,
              private tokenStorage: TokenStorageService) { }

  ngOnInit() {
    if(this.tokenStorage.getToken()){
      this.isLoggedIn = true;
    }


  }

  onLogin(form: NgForm){
    this.registerService.authenticateClient(this.login_cl).subscribe(data =>{
      if (data.success) {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);
        this.flashMessages.show('You are logged in', {cssClass: 'alert-success', timeout: 3000});
        this.router.navigate(['client-profile']);
      } else {
        this.flashMessages.show(data.msg, {cssClass: 'alert-danger', timeout: 3000});
        this.reloadPage();
      }
    });
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
