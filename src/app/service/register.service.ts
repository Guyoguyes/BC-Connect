import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
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

  //get client profile
  getClientProfile():Observable<any>{
    let headers = new Headers()
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json')    
    return this.http.get(`${this.uri}/client/profile`)
  }
  
  //store Client data
  storeClientData(token, client){
    localStorage.setItem('id_token', token);
    localStorage.setItem('client', JSON.stringify(client));
    this.authToken = token;
    this.client = client;
  }

  loadToken(){
    const token = localStorage.getItem('id_token');
    this.authToken = token
  }

  //logout client
  logOutClient(){
    this.authToken = null,
    this.client = null,
    this.servicer = null,
    localStorage.clear();
  }

  //Get service provider profile
  getSevicerProfile(){
    this.loadToken();
    return this.http.get(`${this.uri}/servicer/profile`)
  }

  //Add service provider
  addServicer(register: RegisterServicer): Observable<any>{
    return  this.http.post(`${this.uri}/servicer/register-service-provider`, register)
  }

  //authenticate Service provider
  authenticateServicer(login_cl: LoginClService): Observable<any>{
    return this.http.post(`${this.uri}/servicer/authenticate`, login_cl)
  }
  
  //store Servicer data
  storeServicerData(token, servicer){
    localStorage.setItem('id_token', servicer);
    localStorage.setItem('servicer', JSON.stringify(servicer));
    this.authToken = token;
    this.servicer = servicer;
  }
}
