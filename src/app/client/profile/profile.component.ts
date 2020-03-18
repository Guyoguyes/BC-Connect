import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/service/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  client: Object;

  constructor(private registerService: RegisterService,
              private router: Router) { }

  ngOnInit() {
    this.registerService.getClientProfile().subscribe(profile =>{
      this.client = profile.client
    },
    err =>{
      console.log(err);
      return false
    })
  }

}
