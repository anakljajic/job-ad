import {createFeatureSelector, MemoizedSelector} from "@ngrx/store";
import {JobState} from "./state";

// Istraziti best-practice
export const selectJobState: MemoizedSelector<object, JobState> = createFeatureSelector<JobState>('job');
export const selectJobAd = (state: JobState) => state.jobAd;
export const selectJobAds = (state: JobState) => state.jobAds;
export const selectJobAdSearchResponse = (state: JobState) => state.searchResponse;
