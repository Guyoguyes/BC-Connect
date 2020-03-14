import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { RegisterService } from '../../service/register.service';
import { RegisterServicer } from '../class/register';
import { ValidateService } from 'src/app/service/validate.service';


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

  constructor(private fb: FormBuilder, 
              private registerService: RegisterService,
              private validateService: ValidateService) {
    // this.createForm();
   }

  onSubmit(form: NgForm){

    //validate registration
    if(!this.validateService.validateRegisterServicer(this.register)){
      alert('Please fill in all the fields')
      return false
    }

    //validate email
    if(!this.validateService.validateEmail(this.register.email)){
      alert('Please use a valid email');
      return false
    }

    this.registerService.addServicer(this.register).subscribe(
      result => console.log('Success', result),
      error => console.log('error', error)
    )
  }

  ngOnInit() {
  }

}
