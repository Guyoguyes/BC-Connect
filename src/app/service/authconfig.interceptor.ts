import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HTTP_INTERCEPTORS } from "@angular/common/http";

import { RegisterService } from './register.service';
import { TokenStorageService } from './token-storage.service';


const TOKEN_HEADER_KEY = 'x-access-token';


@Injectable()

export class AuthInterceptor implements HttpInterceptor {
    constructor(private authService: RegisterService, private token: TokenStorageService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
      let authReq = req;
      const token = this.token.getToken();
      if (token != null) {
        authReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, token) });
      }
      return next.handle(authReq);
    }
}


export const authInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
];
