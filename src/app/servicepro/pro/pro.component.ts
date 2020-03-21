import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/service/register.service';
import { Router } from '@angular/router';
import { RegisterServicer } from '../class/register';

@Component({
  selector: 'app-pro',
  templateUrl: './pro.component.html',
  styleUrls: ['./pro.component.css']
})
export class ProComponent implements OnInit {

servicer:  RegisterServicer ={
  first_name: null,
  last_name: null,
  email: null,
  mobile: null,
  city: null,
  service: null,
  password: null
};

  constructor(private registerService: RegisterService,
              private router: Router) { }

  ngOnInit() {
    this.registerService.getSevicerProfile().subscribe(profile =>{
      this.servicer = profile
    },
    err =>{
      console.log(err);
      return false
    })
  }

}
