import {
  createFeatureSelector,
  createSelector,
  MemoizedSelector,
} from '@ngrx/store';
import { CoreState } from './state';

export const getStatistic = (state: CoreState) => state.statistic;

export const selectJobState: MemoizedSelector<object, CoreState> =
  createFeatureSelector<CoreState>('core');
export const selectStatistic: MemoizedSelector<object, any> = createSelector(
  selectJobState,
  getStatistic
);
