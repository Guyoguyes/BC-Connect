import { Component, OnInit } from '@angular/core';



import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ServicerProviderService } from 'src/app/service/servicer-provider.service';
import { RegisterServicer } from 'src/app/servicepro/class/register';
import { LoginCl } from 'src/app/client/class/login-cl';
import { TokenStorageService } from 'src/app/service/token-storage.service';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {

  login: LoginCl ={
    email: null,
    password: null,
  }

  constructor(private registerService: ServicerProviderService,
              private router: Router,
              private flashMessages: FlashMessagesService,
              private tokenStorage: TokenStorageService) { }

  ngOnInit() {
  }

  onLogin(form: NgForm){
    this.registerService.authenticateServicer(this.login).subscribe(data => {
      if(data.success){
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);
        this.flashMessages.show('you are logged in', {cssClass: 'alert-success', timeout: 3000});
        this.router.navigate(['dashboard']);
      } else {
        this.flashMessages.show(data.msg, {cssClass: 'alert-danger', timeout: 3000});
        this.reloadPage();
      }
    }

    )
  }
  reloadPage(){
    window.location.reload();
  }

}
