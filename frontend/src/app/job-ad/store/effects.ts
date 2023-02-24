import {Injectable} from "@angular/core";
import {JobAdApi} from "../api/job-ad-api.service";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {JobAdActions} from "../index";
import {of, switchMap} from "rxjs";
import {JobAd} from "../model/job-ad";
import {SearchResponse} from "../model/search-job-ad";

@Injectable()
export class JobAdEffects {
  constructor(private api: JobAdApi,
              private actions$: Actions) {
  }

  addJobAdEffect$ = createEffect(() => this.actions$.pipe(
    ofType(JobAdActions.addJobAd),
    switchMap(action => {
      return this.api.addJobAd(action.jobAd).pipe(
        switchMap((jobAd: JobAd) => of(JobAdActions.addJobAdSuccess({jobAd})))
      );
    })
  ));

  updateJobAdEffect$ = createEffect(() => this.actions$.pipe(
    ofType(JobAdActions.updateJobAd),
    switchMap(action => {
      return this.api.updateJobAd(action.jobAd).pipe(
        switchMap((jobAd: JobAd) => of(JobAdActions.updateJobAdSuccess({jobAd})))
      );
    })
  ));

  getJobAdByIdEffect$ = createEffect(() => this.actions$.pipe(
    ofType(JobAdActions.getJobAdById),
    switchMap(action => {
      return this.api.getJobAdById(action.id).pipe(
        switchMap((jobAd: JobAd) => of(JobAdActions.getJobAdByIdSuccess({jobAd})))
      );
    })
  ));

  getAllJobAdsEffect$ = createEffect(() => this.actions$.pipe(
    ofType(JobAdActions.getAllJobAds),
    switchMap(action => {
      return this.api.getAllJobAds().pipe(
        switchMap((jobAds: JobAd[]) => of(JobAdActions.getAllJobAdsSuccess({jobAds})))
      );
    })
  ));

  searchJobAdsEffect$ = createEffect(() => this.actions$.pipe(
    ofType(JobAdActions.searchJobAds),
    switchMap(action => {
      return this.api.searchJobAds(action.searchRequest).pipe(
        switchMap((searchResponse: SearchResponse) => of(JobAdActions.searchJobAdsSuccess({searchResponse})))
      );
    })
  ));
}
