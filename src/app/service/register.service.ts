import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Register } from '../client/class/register';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

uri = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  //Add client
  addClient(register: Register): Observable<any>{
   return this.http.post(`${this.uri}/client/register-client`, register)
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
