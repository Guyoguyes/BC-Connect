import { Component, OnInit } from '@angular/core';
import { UserSetting } from 'src/app/user-setting';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  originaluserSetting: UserSetting = {
    email: 'guyo',
    password:'dfghjk'
  }

  //spread operator ...
  userSetting: UserSetting = {...this.originaluserSetting};



  constructor() { }

  ngOnInit() {
  }

}
