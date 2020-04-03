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
  email: '',
  password: '',
}



  constructor(private registerService: RegisterService,
              private router: Router,
              private flashMessages: FlashMessagesService) { }

  ngOnInit() {
  }
  onLogin(form: NgForm){
    this.registerService.authenticateClient(this.login_cl).subscribe(data => {
      if(data.success){
        this.registerService.storeClientData(data.token, data.client)
          this.flashMessages.show('You are logged in', {cssClass: 'alert-success', timeout: 3000})
          this.router.navigate(['client-profile'])
      }else{
        this.flashMessages.show(data.msg, {cssClass: 'alert-danger', timeout: 3000});
        this.router.navigate(['/login'])
      }
    }
      // result => this.flashMessages.show('Login Success', {cssClass:'alert-success', timeout: 3000}),
      // error => this.flashMessages.show(error, {cssClass: 'alert-danger', timeout:3000})



    )
  }

}
