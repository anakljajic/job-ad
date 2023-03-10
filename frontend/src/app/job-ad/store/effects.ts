import { Injectable } from '@angular/core';
import { JobAdApi } from '../api/job-ad-api.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { JobAdActions } from '../index';
import { of, switchMap } from 'rxjs';
import { JobAd } from '../model/job-ad';
import { SearchResponse } from '../model/search-job-ad';
import { SharedActions } from '../../shared';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable()
export class JobAdEffects {
  constructor(
    private api: JobAdApi,
    private actions$: Actions,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  addJobAdEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(JobAdActions.addJobAd),
      switchMap((action) => {
        return this.api.addJobAd(action.jobAd).pipe(
          switchMap((jobAd: JobAd) =>
            of(
              SharedActions.showSuccessMessage({
                message: 'Successfuly added job ad.',
              }),
              JobAdActions.addJobAdSuccess({ jobAd }),
              SharedActions.navigate({ url: ['jobs'] })
            )
          )
        );
      })
    )
  );

  updateJobAdEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(JobAdActions.updateJobAd),
      switchMap((action) => {
        return this.api.updateJobAd(action.jobAd).pipe(
          switchMap((jobAd: JobAd) =>
            of(
              SharedActions.showSuccessMessage({
                message: 'Successfuly updated job ad.',
              }),
              JobAdActions.updateJobAdSuccess({ jobAd }),
              SharedActions.navigate({ url: ['jobs'] })
            )
          )
        );
      })
    )
  );

  getJobAdByIdEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(JobAdActions.getJobAdById),
      switchMap((action) => {
        return this.api
          .getJobAdById(action.id)
          .pipe(
            switchMap((jobAd: JobAd) =>
              of(JobAdActions.getJobAdByIdSuccess({ jobAd }))
            )
          );
      })
    )
  );

  getAllJobAdsEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(JobAdActions.getAllJobAds),
      switchMap((action) => {
        return this.api
          .getAllJobAds()
          .pipe(
            switchMap((jobAds: JobAd[]) =>
              of(JobAdActions.getAllJobAdsSuccess({ jobAds }))
            )
          );
      })
    )
  );

  searchJobAdsEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(JobAdActions.searchJobAds),
      switchMap((action) => {
        this.router.navigate([], {
          relativeTo: this.route,
          queryParams: {
            offset: action.searchRequest.offset,
            limit: action.searchRequest.limit,
            title:
              !action.searchRequest.title || action.searchRequest.title === ''
                ? undefined
                : action.searchRequest.title,
            status: action.searchRequest.status,
          },
          queryParamsHandling: 'merge',
        });

        return this.api
          .searchJobAds(action.searchRequest)
          .pipe(
            switchMap((searchResponse: SearchResponse) =>
              of(JobAdActions.searchJobAdsSuccess({ searchResponse }))
            )
          );
      })
    )
  );

  changeJobAdStatusEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(JobAdActions.changeJobAdStatus),
      switchMap((action) => {
        return this.api.updateJobAd(action.jobAd).pipe(
          switchMap((jobAd: JobAd) =>
            of(
              SharedActions.showSuccessMessage({
                message: `Successfuly changed job ad status to ${jobAd.status}.`,
              }),
              JobAdActions.changeJobAdStatusSuccess({ jobAd }),
              SharedActions.navigate({ url: ['jobs'] })
            )
          )
        );
      })
    )
  );
}
