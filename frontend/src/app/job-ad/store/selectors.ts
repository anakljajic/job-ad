import {
  createFeatureSelector,
  createSelector,
  MemoizedSelector,
} from '@ngrx/store';
import { JobState } from './state';
import { JobAd } from '../model/job-ad';

export const getJobAd = (state: JobState) => state.jobAd;
export const getJobAdSearchResponse = (state: JobState) => state.searchResponse;

export const selectJobState: MemoizedSelector<object, JobState> =
  createFeatureSelector<JobState>('job');
export const selectJobAd: MemoizedSelector<object, JobAd | null> =
  createSelector(selectJobState, getJobAd);
export const selectJobAdSearchResponse: MemoizedSelector<object, any> =
  createSelector(selectJobState, getJobAdSearchResponse);
