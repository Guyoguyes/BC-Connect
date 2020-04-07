import { Component, OnInit } from '@angular/core';



import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ServicerProviderService } from 'src/app/service/servicer-provider.service';
import { RegisterServicer } from 'src/app/servicepro/class/register';
import { LoginCl } from 'src/app/client/class/login-cl';

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
              private flashMessages: FlashMessagesService) { }

  ngOnInit() {
  }

  onLogin(form: NgForm){
    this.registerService.authenticateServicer(this.login).subscribe(data => {
      if(data.success){
        this.registerService.storeServicerData(data.token, data.servicer);
        this.flashMessages.show('you are logged in',
        {cssClass: 'alert-success', timeout: 3000});
        this.router.navigate(['dashboard'])
      }else{
        this.flashMessages.show(data.msg,
          {cssClass: 'alert-danger', timeout: 3000})
      }
    }

    )
  }

}
