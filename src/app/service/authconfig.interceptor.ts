import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler } from "@angular/common/http";
import { RegisterService } from './register.service';


@Injectable()

export class AuthInterceptor implements HttpInterceptor {
    constructor(private authService: RegisterService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const authToken = this.authService.loadToken();
        req = req.clone({
            setHeaders: {
                Authorization: "Bearer " + authToken
            }
        });
        return next.handle(req);
    }
}
