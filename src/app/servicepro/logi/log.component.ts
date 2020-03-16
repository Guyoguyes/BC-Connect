import { Component, OnInit } from '@angular/core';
import { LoginClService } from '../class/login-cl-service';
;
import { RegisterService } from 'src/app/service/register.service';
import { NgForm } from '@angular/forms';

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

  constructor(private registerService: RegisterService) { }

  ngOnInit() {
  }

  onLogin(form: NgForm){
    this.registerService.authenticateServicer(this.login_cl).subscribe(
      result => console.log('Success', result),
      error => console.log('Error', error)
    )
  }

}
