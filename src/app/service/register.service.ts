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

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

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
    return this.http.post(`${this.uri}/register-client`, register, httpOptions);
  }

  //authenticate Client
  // tslint:disable-next-line: variable-name
  authenticateClient(login_cl: LoginCl): Observable<any>{
    return this.http.post(`${this.uri}/authenticate`, login_cl, httpOptions);
  }



  getClientProfile(): Observable<any>{
    return this.http.get(`${this.uri}/profile`, {responseType: 'text'});
  }



  // loggedIn(){
  //   return tokenNotExpired('id_token')
  // }



  //logout client
  // logOutClient(){
  //   this.authToken = null,
  //   this.client = null,
  //   localStorage.clear();
  // }





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
