import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms'
import { RegisterService } from '../../service/register.service';
import { Router } from '@angular/router';
import { ValidateService } from 'src/app/service/validate.service';
import { Register } from '../class/register';

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
              private router: Router) {
    // this.createForm();
  }

  // createForm(){
  //   this.angForm = this.fb.group({
  //     first_name: ['', Validators.required],
  //     last_name: ['', Validators.required],
  //     email: ['', Validators.required],
  //     mobile: ['', Validators.required],
  //     city: ['', Validators.required],
  //     password: ['', Validators.required]
  //   });
  // }

  // addClient(first_name, last_name, email, mobile, city, password){
  //   if(!this.validateService.validateEmail(this.))
  //   this.rs.addClient(first_name, last_name, email, mobile, city, password);
    
  // }

  onSubmit(form: NgForm){
    this.registerService.addClient(this.register).subscribe(
      result => console.log('Client Saved', result),
      error => console.log('error', error)    )
  }

  ngOnInit() {
  }

}
