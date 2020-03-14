import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { RegisterService } from '../../service/register.service';
import { RegisterServicer } from '../class/register';


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

  constructor(private fb: FormBuilder, private registerService: RegisterService) {
    // this.createForm();
   }

  onSubmit(form: NgForm){
    this.registerService.addServicer(this.register).subscribe(
      result => console.log('Success', result),
      error => console.log('error', error)
    )
  }

  ngOnInit() {
  }

}
