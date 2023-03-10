import { createAction, emptyProps, props } from '@ngrx/store';
import { JobAd } from '../model/job-ad';
import { SearchRequest, SearchResponse } from '../model/search-job-ad';

export const enum EJobActions {
  AddJobAd = '[JobAd] Add Job Ad',
  AddJobAdSuccess = '[JobAd] Add Job Ad Success',

  UpdateJobAd = '[JobAd] Update Job Ad',
  UpdateJobAdSuccess = '[JobAd] Update Job Ad Success',

  GetJobAdById = '[JobAd] Get Job Ad By Id',
  GetJobAdByIdSuccess = '[JobAd] Get Job Ad By Id Success',

  ClearJobAd = '[JobAd] Clear Job Ad',

  GetAllJobAds = '[JobAd] Get All Job Ads',
  GetAllJobAdsSuccess = '[JobAd] Get All Job Ads Success',

  SearchJobAds = '[JobAd] Search Job Ads',
  SearchJobAdsSuccess = '[JobAd] Search Job Ads Success',

  ClearJobAdsSearchResponse = '[JobAd] Clear Job Ads Search Response',

  ChangeJobAdStatus = '[JobAd] Change Job Ad Status',
  ChangeJobAdStatusSuccess = '[JobAd] Change Job Ad Status Success',
}

export const addJobAd = createAction(
  EJobActions.AddJobAd,
  props<{ jobAd: Omit<JobAd, 'id'> }>()
);
export const addJobAdSuccess = createAction(
  EJobActions.AddJobAdSuccess,
  props<{ jobAd: JobAd }>()
);

export const updateJobAd = createAction(
  EJobActions.UpdateJobAd,
  props<{ jobAd: JobAd }>()
);
export const updateJobAdSuccess = createAction(
  EJobActions.UpdateJobAdSuccess,
  props<{ jobAd: JobAd }>()
);

export const getJobAdById = createAction(
  EJobActions.GetJobAdById,
  props<{ id: number }>()
);
export const getJobAdByIdSuccess = createAction(
  EJobActions.GetJobAdByIdSuccess,
  props<{ jobAd: JobAd }>()
);

export const clearJobAd = createAction(EJobActions.ClearJobAd);

export const getAllJobAds = createAction(EJobActions.GetAllJobAds, emptyProps);
export const getAllJobAdsSuccess = createAction(
  EJobActions.GetAllJobAdsSuccess,
  props<{ jobAds: JobAd[] }>()
);

export const searchJobAds = createAction(
  EJobActions.SearchJobAds,
  props<{ searchRequest: SearchRequest }>()
);
export const searchJobAdsSuccess = createAction(
  EJobActions.SearchJobAdsSuccess,
  props<{ searchResponse: SearchResponse }>()
);

export const clearJobAdsSearchResponse = createAction(
  EJobActions.ClearJobAdsSearchResponse
);

export const changeJobAdStatus = createAction(
  EJobActions.ChangeJobAdStatus,
  props<{ jobAd: JobAd }>()
);

export const changeJobAdStatusSuccess = createAction(
  EJobActions.ChangeJobAdStatusSuccess,
  props<{ jobAd: JobAd }>()
);
