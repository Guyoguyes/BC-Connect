import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms'
import { RegisterService } from '../../service/register.service';
import { Router } from '@angular/router';
import { ValidateService } from 'src/app/service/validate.service';
import { Register } from '../class/register';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // angForm: FormGroup;

  register: Register = {
    first_name: null,
    last_name: null,
    email: null,
    mobile: null,
    city: null,
    password: null
  }

  constructor(private fb: FormBuilder,
              private registerService: RegisterService,
              private validateService: ValidateService,
              private router: Router,
              private flashmessages: FlashMessagesService) {

  }


  onSubmit(form: NgForm){

    //validation of registration
    if(!this.validateService.validateRegisterClient(this.register)){
      this.flashmessages.show('Please fill in all the fields', {cssClass: 'alert-danger', timeout: 4000});
      return false;
    }

    //validation of email
    if(!this.validateService.validateEmail(this.register.email)){
      this.flashmessages.show('Please use a vaild email', {cssClass: 'alert-danger', timeout: 3000})
    }

    this.registerService.addClient(this.register).subscribe(
      result => console.log('Client Saved', result),
      error => console.log('error', error)

      )
      this.flashmessages.show('Client Registered successfully', {cssClass: 'alert-success', timeout: 3000});
      this.router.navigate(['/login-client'])
  }

  ngOnInit() {
  }

}
