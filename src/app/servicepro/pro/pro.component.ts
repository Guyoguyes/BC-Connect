import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { RegisterServicer } from '../class/register';
import { ServicerProviderService } from 'src/app/service/servicer-provider.service';

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

  constructor(private registerService: ServicerProviderService,
              private router: Router) { }

  ngOnInit() {
    this.registerService.getSevicerProfile().subscribe(
      result => console.log('Profile Success', result),
      error => console.log('error', error)
    )
  }

}
