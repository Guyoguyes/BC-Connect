import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../service/register.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Register } from '../client/class/register';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  
  User;

  constructor(private registerService: RegisterService,
              private router: Router,
              private flashMessages: FlashMessagesService) { }

  ngOnInit() {
    // this.registerService.loggedIn() == !this.tokenStorageService.getToken();

    // if (this.isLoggedIn) {
    //   const user = this.tokenStorageService.getUser();
    //   this.Username = user.Username;
    // }

  }

  logout() {
    this.registerService.deleteToken();
    this.router.navigateByUrl('/login')
  }

}
