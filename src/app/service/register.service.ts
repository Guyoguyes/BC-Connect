import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { Register } from '../client/class/register';
import { Observable, throwError} from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators'
// import { JwtHelperService } from '@auth0/angular-jwt';


import { RegisterServicer } from '../servicepro/class/register';
import { LoginCl } from '../client/class/login-cl';
import { LoginClService } from '../servicepro/class/login-cl-service';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

uri = 'http://localhost:3000/client';
authToken: any;
client: any;


  constructor(private http: HttpClient) { }

  //Add client
  addClient(register: Register): Observable<any>{
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
   return this.http.post(`${this.uri}/register-client`, register, {headers: headers})
  }

  //authenticate Client
  authenticateClient(login_cl: LoginCl): Observable<any>{
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post(`${this.uri}/authenticate`, login_cl, {headers: headers})
  }

  //get client profile
  getClientProfile(){
    let headers = new HttpHeaders();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json')
    return this.http.get(`${this.uri}/profile`, {headers: headers})


  }

  // getClient(): Observable<Register[]>{
  //   return this.http.get<Register[]>(`${this.uri}/client/profile`).pipe(
  //     tap(data => console.log('profile')),
  //     catchError(this.handleError)
  //   )
  // }

  // getClientProfile(id): Observable<Register | undefined>{

  //   return this.getClient().pipe(
  //     map((client: Register[]) => client.find(c => c.email === id ))
  //   )

  // }






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

  // loggedIn(){
  //   const token = localStorage.getItem('token');
  //   return !this.jwtHelper.isTokenExpired(token)
  // }


  loggedIn(){
    return tokenNotExpired('id_token')
  }

  // loggedIn(){
  //   let authToken = localStorage.getItem('access_token');
  //   return (authToken !== null) ? true : false;
  // }

  //logout client
  logOutClient(){
    this.authToken = null,
    this.client = null,
    localStorage.clear();
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
