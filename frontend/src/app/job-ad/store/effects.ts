import {Injectable} from "@angular/core";
import {JobAdApi} from "../api/job-ad-api.service";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {JobAdActions} from "../index";
import {catchError, of, switchMap} from "rxjs";
import {JobAd} from "../model/job-ad";
import {SearchResponse} from "../model/search-job-ad";
import {SharedActions} from "../../shared";

@Injectable()
export class JobAdEffects {
  constructor(private api: JobAdApi,
              private actions$: Actions) {
  }

  addJobAdEffect$ = createEffect(() => this.actions$.pipe(
    ofType(JobAdActions.addJobAd),
    switchMap(action => {
      return this.api.addJobAd(action.jobAd).pipe(
        switchMap((jobAd: JobAd) => of(
          SharedActions.message({message: 'Successfuly added job ad.'}),
          JobAdActions.addJobAdSuccess({jobAd}),
          SharedActions.navigate({url: ['jobs']})
        )),
        catchError(err => of(
          SharedActions.message({message: err.message})
        )));
    })
  ));

  updateJobAdEffect$ = createEffect(() => this.actions$.pipe(
    ofType(JobAdActions.updateJobAd),
    switchMap(action => {
      return this.api.updateJobAd(action.jobAd).pipe(
        switchMap((jobAd: JobAd) => of(
          SharedActions.message({message: 'Successfuly updated job ad.'}),
          JobAdActions.updateJobAdSuccess({jobAd}),
          SharedActions.navigate({url: ['jobs']})
        )),
        catchError(err => of(
          SharedActions.message({message: err})
        )));
    })
  ));

  getJobAdByIdEffect$ = createEffect(() => this.actions$.pipe(
    ofType(JobAdActions.getJobAdById),
    switchMap(action => {
      return this.api.getJobAdById(action.id).pipe(
        switchMap((jobAd: JobAd) => of(JobAdActions.getJobAdByIdSuccess({jobAd}))),
        catchError(err => of(
          SharedActions.message({message: err})
        ))
      );
    })
  ));

  getAllJobAdsEffect$ = createEffect(() => this.actions$.pipe(
    ofType(JobAdActions.getAllJobAds),
    switchMap(action => {
      return this.api.getAllJobAds().pipe(
        switchMap((jobAds: JobAd[]) => of(JobAdActions.getAllJobAdsSuccess({jobAds}))),
        catchError(err => of(
          SharedActions.message({message: err})
        ))
      );
    })
  ));

  searchJobAdsEffect$ = createEffect(() => this.actions$.pipe(
    ofType(JobAdActions.searchJobAds),
    switchMap(action => {
      return this.api.searchJobAds(action.searchRequest).pipe(
        switchMap((searchResponse: SearchResponse) => of(JobAdActions.searchJobAdsSuccess({searchResponse}))),
        catchError(err => of(
          SharedActions.message({message: err})
        ))
      );
    })
  ));
}
