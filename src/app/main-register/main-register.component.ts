import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-register',
  templateUrl: './main-register.component.html',
  styleUrls: ['./main-register.component.css']
})
export class MainRegisterComponent implements OnInit {

  constructor(private router: Router) { }

  onButton(){
    this.router.navigate(['/register-client']);
  }

  onButton1(){
    this.router.navigate(['/register-servicer']);
  }


  ngOnInit() {
  }

}
