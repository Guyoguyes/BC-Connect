import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

uri = 'http://localhost:3000/client';


  constructor(private http: HttpClient) { }
}

//register client
addClient(first_name, last_name, email, mobile, city, password){
  const obj = {
    first_name: first_name,
    last_name: last_name,
    email: email,
    mobile: mobile,
    city: city,
    password: password
  }
  console.log(obj);
  this.http.post(`${this.uri}/register-client`, obj)
      .subscribe(res => console.log('done'))
}
