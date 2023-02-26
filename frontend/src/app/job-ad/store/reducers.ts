import { Action, createReducer, on } from '@ngrx/store';
import { cloneDeep } from 'lodash-es';
import { INIT_JOB_STATE, INIT_SEARCH_RESPONSE, JobState } from './state';
import {
  addJobAdSuccess,
  changeJobAdStatusSuccess,
  clearJobAdsSearchResponse,
  getAllJobAdsSuccess,
  getJobAdByIdSuccess,
  searchJobAdsSuccess,
  updateJobAdSuccess,
} from './actions';

const reducer = createReducer(
  cloneDeep(INIT_JOB_STATE),
  on(addJobAdSuccess, (state, { jobAd }) => ({
    ...state,
    jobAd,
  })),
  on(updateJobAdSuccess, (state, { jobAd }) => ({
    ...state,
    jobAd,
  })),
  on(getJobAdByIdSuccess, (state, { jobAd }) => ({
    ...state,
    jobAd,
  })),
  on(getAllJobAdsSuccess, (state, { jobAds }) => ({
    ...state,
    jobAds,
  })),
  on(searchJobAdsSuccess, (state, { searchResponse }) => ({
    ...state,
    searchResponse,
  })),
  on(clearJobAdsSearchResponse, (state) => ({
    ...state,
    searchResponse: INIT_SEARCH_RESPONSE,
  })),
  on(changeJobAdStatusSuccess, (state, { jobAd }) => ({
    ...state,
    searchResponse: {
      ...state.searchResponse!,
      data: state.searchResponse!.data.map((j) =>
        j.id === jobAd.id ? { ...j, status: jobAd.status } : j
      ),
    },
  }))
);

export function reducers(
  state: JobState | undefined,
  action: Action
): JobState {
  return reducer(state, action);
}
