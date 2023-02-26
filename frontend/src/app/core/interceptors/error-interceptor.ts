import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Store } from '@ngrx/store';
import { SharedActions } from '../../shared';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private store$: Store) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((err) => {
        this.store$.dispatch(
          SharedActions.showErrorMessage({ message: err.error.message })
        );

        return throwError(err);
      })
    );
  }
}
