import {createFeatureSelector, MemoizedSelector} from "@ngrx/store";
import {JobState} from "./state";

export const selectJobState: MemoizedSelector<object, JobState> = createFeatureSelector<JobState>('job');
