import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { RegisterServicer } from '../class/register';
import { ValidateService } from 'src/app/service/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { ServicerProviderService } from 'src/app/service/servicer-provider.service';


@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent implements OnInit {

  register: RegisterServicer ={
    first_name: null,
    last_name: null,
    email: null,
    mobile: null,
    city: null,
    service: null,
    password: null,
  }

  constructor(private router: Router,
              private registerService: ServicerProviderService,
              private validateService: ValidateService,
              private flashMessages: FlashMessagesService) {
    // this.createForm();
   }

  onSubmit(form: NgForm){

    //validate registration
    if(!this.validateService.validateRegisterServicer(this.register)){
      this.flashMessages.show('Please fill in all the fields', {cssClass: 'alert-danger', timeout: 3000});
      return false
    }

    //validate email
   else if(!this.validateService.validateEmail(this.register.email)){
      this.flashMessages.show('Please use a valid Email', {cssClass: 'alert-danger', timeout: 3000})
    }else{
      this.registerService.addServicer(this.register).subscribe(
        result => console.log('Success', result),
        error => console.log('error', error)
      )
      this.flashMessages.show('Service provider registered successfully', {cssClass: 'alert-success', timeout: 3000});
      this.router.navigate(['/login-servicer'])
    }


  }

  ngOnInit() {
  }

}
