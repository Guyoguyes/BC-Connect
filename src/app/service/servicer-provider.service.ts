import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  environment } from '../../environments/environment';
import {map, tap} from 'rxjs/operators';

import { RegisterServicer } from './../servicepro/class/register';




@Injectable({
  providedIn: 'root'
})
export class ServicerProviderService {




  constructor(private http: HttpClient) { }

getServicers() {
  return this.http.get(environment.apiBaseUrl + '/servicer/list');
}

getEachServicer(id: number) {
  return this.http.get(environment.apiBaseUrl + `/servicer/profile/${id}`).pipe(
    map((servicer: RegisterServicer[]) => servicer.find(s => s.email ))
  )
}

}
