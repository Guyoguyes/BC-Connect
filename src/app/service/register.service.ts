import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { Register } from '../client/class/register';
import { Observable, throwError} from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators'
// import { JwtHelperService } from '@auth0/angular-jwt';

import { LoginCl } from '../client/class/login-cl';
import { RegisterServicer } from '../servicepro/class/register';




@Injectable({
  providedIn: 'root'
})
export class RegisterService {

uri = 'http://localhost:3000';

noAuthHeader = { headers: new HttpHeaders({ 'noAuth': 'True'})}

  constructor(private http: HttpClient) { }

  //Add client
  addClient(register: Register){
    return this.http.post(`${this.uri}/client/register-client`, register, this.noAuthHeader);
  }

  //authenticate Client
  authenticateClient(login_cl: LoginCl){
    return this.http.post(`${this.uri}/client/authenticate`, login_cl, this.noAuthHeader);
  }



  getClientProfile(){
    return this.http.get(`${this.uri}/client/client-profile`);
  }

//Service Provider

  addServicer(register: RegisterServicer){
    return  this.http.post(`${this.uri}/servicer/register-service-provider`, register, this.noAuthHeader)

  }

  //authenticate Service provider
  authenticateServicer(login: LoginCl){
    return this.http.post(`${this.uri}/servicer/authenticate`, login)
  }


  //Get service provider profile
  getSevicerProfile(){
    return this.http.get(`${this.uri}/servicer/profile`)
  }


  //Helper Method (TOKENS)

  setToken(token: string){
    localStorage.setItem('token', token)
  };

  getToken(){
    return localStorage.getItem('token')
  };

  deleteToken(){
    localStorage.removeItem('token')
  };

  getUserPayLoad(){
    let token = this.getToken();
    if(token){
      var clientPayload = atob(token.split('.')[1]);
      return JSON.parse(clientPayload)
    }else{
      return null
    }
  }


  isLoggedIn(){
    var userPayload = this.getUserPayLoad();
    if(userPayload){
      return userPayload.exp > Date.now() / 1000;
     }
  }







  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occured: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }

}
