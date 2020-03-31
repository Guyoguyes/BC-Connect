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

  // client: Object;

  client:  Register = {
    first_name: '',
    last_name: '',
    email: '',
    mobile: null,
    city: '',
    password: '',
  } ;
  constructor(private registerService: RegisterService,
              private router: Router) { }

  ngOnInit() {
  this.registerService.getClientProfile().subscribe(
    result => console.log('Profile Success', result),
    error => console.log('Profile error', error)

  )}

}
