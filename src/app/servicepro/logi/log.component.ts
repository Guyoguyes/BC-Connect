import { Component, OnInit } from '@angular/core';



import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ServicerProviderService } from 'src/app/service/servicer-provider.service';
import { RegisterServicer } from 'src/app/servicepro/class/register';
import { LoginCl } from 'src/app/client/class/login-cl';
import { RegisterService } from 'src/app/service/register.service';


@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {

  serverErrorMessage: string;

  login: LoginCl ={
    email: null,
    password: null,
  }

  constructor(private registerService: RegisterService,
              private router: Router,
              private flashMessages: FlashMessagesService,
              ) { }

  ngOnInit() {
    if(this.registerService.isLoggedIn()){
      this.router.navigateByUrl('/servicer-profile')
    }
  }

  onLogin(form: NgForm){
    this.registerService.authenticateServicer(this.login).subscribe(
      res => {
        this.registerService.setToken(res['token']);
        this.router.navigateByUrl('/servicer-profile')
      },
      err => {
        
      }
    )

}
}
