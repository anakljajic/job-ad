import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { ESharedActions } from './actions';
import { map } from 'rxjs';
import { SnackBarServiceService } from '../services/snack-bar-service.service';

@Injectable()
export class SharedEffects {
  constructor(
    private action$: Actions,
    private router: Router,
    private snackBarService: SnackBarServiceService
  ) {}

  navigateEffect$ = createEffect(
    () =>
      this.action$.pipe(
        ofType(ESharedActions.Navigate),
        map((data: { url: string[] }) => {
          this.router.navigate(data.url);
        })
      ),
    { dispatch: false }
  );

  successMessageEffect$ = createEffect(
    () =>
      this.action$.pipe(
        ofType(ESharedActions.ShowSuccessMessage),
        map((action: { message: string }) => {
          this.snackBarService.openSnackBar(action.message, 'success');
        })
      ),
    { dispatch: false }
  );

  errorMessageEffect$ = createEffect(
    () =>
      this.action$.pipe(
        ofType(ESharedActions.ShowErrorMessage),
        map((action: { message: string }) => {
          this.snackBarService.openSnackBar(action.message, 'error');
        })
      ),
    { dispatch: false }
  );
}
