import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/service/register.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Register } from '../class/register';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  // client: Object;

  clients:  Register = {
    first_name: '',
    last_name: '',
    email: '',
    mobile: null,
    city: '',
    password: '',
  } ;
errorMessage = '';
client: any = {}

// clients : Register;

  constructor(private registerService: RegisterService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
  this.registerService.getClientProfile().subscribe(data =>{
    this.clients = data
  },
  err =>{
    console.log(err)
    return false;
  }

  )}
//   const param = this.route.snapshot.paramMap.get('id');
//   if(param){
//     const id = +param;
//     this.getClientProfile(id);
//   }

// }


// getClientProfile(id: number){
//   this.registerService.getClientProfile(id).subscribe({
//     next: client => this.client = client,
//     error: err => this.errorMessage = err
//   })
}


