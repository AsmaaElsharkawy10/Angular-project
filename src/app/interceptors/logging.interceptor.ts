import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class LoggingInterceptor implements HttpInterceptor {
 
  constructor() {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log(req)
    const authToken = localStorage.getItem("token")
    const authReq = req.clone({
      headers:req.headers.set('Authorization','Bearer '+authToken)
    })
    return next.handle(authReq);
  }
}
