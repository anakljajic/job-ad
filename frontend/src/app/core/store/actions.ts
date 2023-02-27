import { createAction, props } from '@ngrx/store';
import { Statistic } from '../model/statistic';

export const enum ECoreActions {
  GetStatistic = '[Core] Get Statistic',
  GetStatisticSuccess = '[Core] Get Statistic Success',

  ClearStatistic = '[Core] Clear Statistic',
}

export const getStatistic = createAction(ECoreActions.GetStatistic);
export const getStatisticSuccess = createAction(
  ECoreActions.GetStatisticSuccess,
  props<{ statistic: Statistic }>()
);

export const clearStatistic = createAction(ECoreActions.ClearStatistic);
