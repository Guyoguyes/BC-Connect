import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Register } from '../client/class/register';
import { Observable } from 'rxjs';
import { RegisterServicer } from '../servicepro/class/register';
import { LoginCl } from '../client/class/login-cl';
import { LoginClService } from '../servicepro/class/login-cl-service';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

uri = 'http://localhost:3000';
authToken: any;
client: any;
servicer: any;

  constructor(private http: HttpClient) { }

  //Add client
  addClient(register: Register): Observable<any>{
   return this.http.post(`${this.uri}/client/register-client`, register)
  }

  //authenticate Client
  authenticateClient(login_cl: LoginCl): Observable<any>{
    return this.http.post(`${this.uri}/client/authenticate`, login_cl)
  }
  
  //store Client data
  storeClientData(token, client){
    localStorage.setItem('id_token', token);
    localStorage.setItem('client', JSON.stringify(client));
    this.authToken = token;
    this.client = client;
  }

  //logout client
  logOutClient(){
    this.authToken = null,
    this.client = null,
    localStorage.clear();
  }


  //Add service provider
  addServicer(register: RegisterServicer): Observable<any>{
    return  this.http.post(`${this.uri}/servicer/register-service-provider`, register)
  }

  //authenticate Service provider
  authenticateServicer(login_cl: LoginClService): Observable<any>{
    return this.http.post(`${this.uri}/servicer/authenticate`, login_cl)
  }
}
