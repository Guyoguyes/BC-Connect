import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/service/register.service';
import { Router } from '@angular/router';
import { Register } from '../class/register';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  client: Register ={
    first_name: null,
    last_name: null,
    email: null,
    mobile: null,
    city: null,
    password: null
  };

  constructor(private registerService: RegisterService,
              private router: Router) { }

  ngOnInit() {
    this.registerService.getClientProfile().subscribe(profile =>{
      this.client = profile.client;
    },
    err =>{
      console.log(err);
      return false
    })
  }

}
