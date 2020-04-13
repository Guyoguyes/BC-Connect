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
  canActivate() {
   if (!this.registerService.authenticateClient || !this.registerService.authenticateServicer) {
    this.router.navigate(['/main-login']);
    return false;
   }
   return true;
  }

}
