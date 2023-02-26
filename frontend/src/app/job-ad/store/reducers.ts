import { Action, createReducer, on } from '@ngrx/store';
import { cloneDeep } from 'lodash-es';
import { INIT_JOB_STATE, INIT_SEARCH_RESPONSE, JobState } from './state';
import {
  addJobAdSuccess,
  changeJobAdStatus,
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
  on(changeJobAdStatusSuccess, (state, { jobAd }) => {
    const index = state.searchResponse!.data.findIndex(
      (j) => j.id !== jobAd.id
    );
    const dataArrayCopy = [...state.searchResponse!.data];
    dataArrayCopy[index].status = jobAd.status;
    return {
      ...state,
      todos: dataArrayCopy,
    };
  })
);

export function reducers(
  state: JobState | undefined,
  action: Action
): JobState {
  return reducer(state, action);
}
