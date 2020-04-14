import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/service/register.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Register } from '../class/register';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  // client: Object;
  serverErrorMessage: string;

  clients:  Register = {
    first_name: null,
    last_name: null,
    email: null,
    mobile: null,
    city: null,
    password: null,
  } ;


// clients : Register;

  constructor(private registerService: RegisterService,

              ) { }

  ngOnInit() {
    this.registerService.getClientProfile().subscribe(
      res => {
        this.clients = res['client']
      },
      err => {
        console.log(err)
      }
    )
  }

}


