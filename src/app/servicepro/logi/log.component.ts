import { Component, OnInit } from '@angular/core';
import { LoginClService } from '../class/login-cl-service';
;
import { RegisterService } from 'src/app/service/register.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {

  login_cl: LoginClService = {
    email: null,
    password: null
  }

  constructor(private registerService: RegisterService,
              private router: Router,
              private flashMessages: FlashMessagesService) { }

  ngOnInit() {
  }

  onLogin(form: NgForm){
    this.registerService.authenticateServicer(this.login_cl).subscribe(data => {
      if(data.success){
        this.registerService.storeServicerData(data.token, data.servicer);
        this.flashMessages.show('you are logged in',
        {cssClass: 'alert-success', timeout: 3000});
        this.router.navigate(['/dashboard'])
      }else{
        this.flashMessages.show(data.msg,
          {cssClass: 'alert-danger', timeout: 3000})
      }
    }
     
    )
  }

}
