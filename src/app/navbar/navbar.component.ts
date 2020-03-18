import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../service/register.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private registerService: RegisterService,
              private router: Router,
              private flashMessages: FlashMessagesService) { }

  ngOnInit() {
  }

  onLogOut(){
    this.registerService.logOutClient();
    this.flashMessages.show('You are logged out', {cssClass: 'alert-success', timeout:3000});
    this.router.navigate(['/home']);
    return false;
  }

}
