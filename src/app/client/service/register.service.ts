import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

uri = 'http://localhost:3000/client';


  constructor(private http: HttpClient) { }
}

//register client
