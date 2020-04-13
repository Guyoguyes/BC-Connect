import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HTTP_INTERCEPTORS } from "@angular/common/http";

import { RegisterService } from './register.service';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';



const TOKEN_HEADER_KEY = 'x-access-token';


@Injectable()

export class AuthInterceptor implements HttpInterceptor {
    constructor(private authService: RegisterService, private router: Router) { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
      if(req.headers.get('noauth')){
        return next.handle(req.clone());
      }else{
        const clonereq = req.clone({
          headers: req.headers.set("Authorization", "Bearer " +this.authService.getToken())
        })
        return next.handle(clonereq).pipe(
          tap(
            event => {},
            err => {
              if(err.error.auth == false){
                this.router.navigateByUrl('/main-login')
              }
            }
          )
        )
      }
    }
}


export const authInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
];
