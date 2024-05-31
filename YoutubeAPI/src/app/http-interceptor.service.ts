import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('HTTP Request started: ', req);

    return next.handle(req).pipe( 
      tap(event => {
        console.log('HTTP Response received: ', event);
      }),
      catchError((error: HttpErrorResponse) => {
        console.error('HTTP Request error: ', error);
        return throwError(error);
      })
    );
  }
}
