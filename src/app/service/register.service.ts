import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

uri = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  //Add client
  addClient(first_name, last_name, email, mobile, city, password){
    const obj = {
      first_name: first_name,
      last_name: last_name,
      email: email,
      mobile: mobile,
      city: city,
      password: password
    };
    console.log(obj);
    this.http.post(`${this.uri}/client/register-client`, obj)
        .subscribe(res => alert('Client registered Successfully'))
  }

  //Add service provider
  addService(first_name, last_name, email, mobile, city, service, password){
    const obj = {
      first_name: first_name,
      last_name: last_name,
      email: email,
      mobile: mobile,
      city: city,
      service: service,
      password: password
    };
    console.log(obj);
    this.http.post(`${this.uri}/servicer/register-service-provider`, obj)
        .subscribe(res => alert('Service Provider registered successfully'))
  }
}
