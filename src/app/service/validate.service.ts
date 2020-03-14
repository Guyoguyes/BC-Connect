import { Injectable } from '@angular/core';
import { Register } from '../client/class/register';
import { RegisterServicer } from '../servicepro/class/register';

@Injectable({
  providedIn: 'root'
})
export class ValidateService {

  constructor() { }

  validateRegisterClient(client: Register){
    if(client.first_name == '' || client.last_name == '' || client.email == '' || client.mobile == null || client.city == '' || client.password == ''){
      return false
    }else {
      return true
    }
  }

  validateRegisterServicer(servicer: RegisterServicer){
    if(servicer.first_name == '' || servicer.last_name == '' || servicer.email == '' || servicer.mobile == null || servicer.city == '' || servicer.service == '' || servicer.password == ''){
      return false
    }else {
      return true
    }
  }

  validateEmail(email){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
}
