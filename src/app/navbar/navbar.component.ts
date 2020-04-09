import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../service/register.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { TokenStorageService } from '../service/token-storage.service';
import { Register } from '../client/class/register';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLoggedIn = true;
  showRoutes = false;
  Username : Register ={
    first_name : null,
    last_name: null,
    email: null,
    mobile: null,
    city: null,
    password: null
  }

  constructor(private registerService: RegisterService,
              private router: Router,
              private flashMessages: FlashMessagesService,
              private tokenStorageService: TokenStorageService) { }

  ngOnInit() {
    // this.registerService.loggedIn() == !this.tokenStorageService.getToken();

    // if (this.isLoggedIn) {
    //   const user = this.tokenStorageService.getUser();
    //   this.Username = user.Username;
    // }
    if(this.tokenStorageService.getToken()){
      const user = this.tokenStorageService.getUser();
      this.Username = user.Username;
    }
  }

  logout() {
    this.tokenStorageService.signOut();
    this.flashMessages.show('You are loggedOut , see you again', {cssClass: 'alert-success', timeout: 3000})
    window.location.reload();
    // tslint:disable-next-line: no-unused-expression
    this.router.navigate[('/home')];
  }

}
