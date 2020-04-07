import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RegisterServicer } from './../servicepro/class/register';
import { tokenNotExpired } from 'angular2-jwt';
import { LoginCl } from '../client/class/login-cl';

@Injectable({
  providedIn: 'root'
})
export class ServicerProviderService {

  uri = 'http://localhost:3000/servicer'
  authToken: any;

  servicer: any;

  constructor(private http: HttpClient) { }

 //Add service provider
 addServicer(register: RegisterServicer): Observable<any>{
  let headers = new HttpHeaders();
  headers.append('Content-Type', 'application/json');
  return  this.http.post(`${this.uri}/register-service-provider`, register, {headers: headers})

}

//authenticate Service provider
authenticateServicer(login: LoginCl): Observable<any>{
  let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
  return this.http.post(`${this.uri}/authenticate`, login, {headers: headers})
}

loggedIn(){
  return tokenNotExpired('id_token')
}

//Get service provider profile
getSevicerProfile(){
    let headers = new HttpHeaders();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json')
  return this.http.get(`${this.uri}/profile`, {headers: headers})
}

loadToken(){
  const token = localStorage.getItem('id_token');
  this.authToken = token
}

//store Servicer data
storeServicerData(token, servicer){
  localStorage.setItem('id_token', servicer);
  localStorage.setItem('servicer', JSON.stringify(servicer));
  this.authToken = token;
  this.servicer = servicer;
}

//logout client
logOutClient(){
  this.authToken = null,
  this.servicer = null,
  localStorage.clear();
}

}
