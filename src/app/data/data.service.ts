import { Injectable } from '@angular/core';
import { UserSetting } from '../user-setting';
import { Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }


  postUserSettingsForms(userSettings: UserSetting) : Observable<UserSetting>{
    return of(userSettings);
  }
}
