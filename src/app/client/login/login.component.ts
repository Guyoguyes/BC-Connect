import { Component, OnInit } from '@angular/core';
import { UserSetting } from 'src/app/user-setting';
import { DataService } from 'src/app/data/data.service';

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



  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  onSubmit(form){
    console.log('in onSubmit' , form.valid);
    this.dataService.postUserSettingsForms(this.userSetting).subscribe();
    result => console.log('success: ', result);
    error => console.log('error', error)

  }

}
