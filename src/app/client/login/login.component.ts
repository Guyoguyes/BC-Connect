import { Component, OnInit } from '@angular/core';
import { LoginCl } from '../class/login-cl';
import { NgForm } from '@angular/forms';
import { RegisterService } from 'src/app/service/register.service';



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



  constructor(private registerService: RegisterService) { }

  ngOnInit() {
  }
  onLogin(form: NgForm){
    this.registerService.authenticateClient(this.login_cl).subscribe(
      result => console.log('Success', result),
      error => console.log('Error', error)

    )
  }

}
