import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CoreActions } from '../index';
import { of, switchMap } from 'rxjs';
import { CoreApi } from '../api/core-api.service';
import { Statistic } from '../model/statistic';

@Injectable()
export class CoreEffects {
  constructor(private api: CoreApi, private actions$: Actions) {}

  getStatisticEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CoreActions.getStatistic),
      switchMap((action) => {
        return this.api
          .getStatistic()
          .pipe(
            switchMap((statistic: Statistic) =>
              of(CoreActions.getStatisticSuccess({ statistic }))
            )
          );
      })
    )
  );
}
