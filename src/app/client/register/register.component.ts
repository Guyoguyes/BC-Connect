import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { RegisterService } from '../../service/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

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
      password:['', Validators.required]
    })
  }

  addClient(first_name, last_name, email, mobile, city, password){
    this.rs.addClient(first_name, last_name, email, mobile, city, password)
  }

  ngOnInit() {
  }

}
