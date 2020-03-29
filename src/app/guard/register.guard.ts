import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { RegisterService } from '../service/register.service'

@Injectable({
  providedIn: 'root'
})
export class RegisterGuard implements CanActivate {
  constructor(private registerService: RegisterService, private router: Router){

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.registerService.loggedIn()){
      return true
    }else{
      this.router.navigate(['/main-login'])
      
    }


  }


}
