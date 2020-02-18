import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RegisterService } from '../../service/register.service';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent implements OnInit {

  angForm: FormGroup
  constructor(private fb: FormBuilder, private rs: RegisterService) {
    this.createForm();
   }

   createForm(){
    this.angForm = this.fb.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', Validators.required],
      mobile: ['', Validators.required],
      city: ['', Validators.required],
      service:['', Validators.required],
      password:['', Validators.required]
    })
   }

   addService(first_name, last_name, email, mobile, city, service, password){
     this.rs.addService(first_name, last_name, email, mobile, city, service, password)
   }

  ngOnInit() {
  }

}
