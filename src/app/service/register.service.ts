import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Register } from '../client/class/register';
import { Observable } from 'rxjs';
import { RegisterServicer } from '../servicepro/class/register';

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
  addServicer(register: RegisterServicer): Observable<any>{
    return  this.http.post(`${this.uri}/servicer/register-service-provider`, register)
  }
}
