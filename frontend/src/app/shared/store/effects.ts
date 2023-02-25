import {Router} from "@angular/router";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {Injectable} from "@angular/core";
import {ESharedActions} from "./actions";
import {map} from "rxjs";
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable()
export class SharedEffects {
  constructor(private action$: Actions,
              private router: Router,
              private snackBar: MatSnackBar) {
  }

  navigateEffect$ = createEffect(
    () => this.action$.pipe(
      ofType(ESharedActions.Navigate),
      map((data: { url: string[] }) => {
        this.router.navigate(data.url);
      })
    ), {dispatch: false});

  successMessageEffect$ = createEffect(
    () => this.action$.pipe(
      ofType(ESharedActions.Message),
      map((data: { message: string }) => {
        this.snackBar.open(data.message, '', {
          duration: 3000,
          panelClass: ['green-snackbar'],
          horizontalPosition: "center",
          verticalPosition: "top",
        })
      })
    ), {dispatch: false});
}
