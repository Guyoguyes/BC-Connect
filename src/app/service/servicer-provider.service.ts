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


  constructor(private http: HttpClient) { }

 //Add service provider
 

//Helper Methods

setToken(token: string){
  localStorage.setItem('token', token);
}

getToken(){
  return localStorage.getItem('token')
}

deleteToken(){
  localStorage.removeItem('token')
}

getServicerPayLoad(){
  let token = this.getToken();
  if(token){
    var servicerPayLoad = atob(token.split('.')[1]);
    return JSON.parse(servicerPayLoad)
  }else{
    return null
  }
}

isLoggedIn(){
  var servicerPayLoad = this.getServicerPayLoad();
  if(servicerPayLoad){
    return servicerPayLoad.exp > Date.now() / 1000;
  }
}

}
