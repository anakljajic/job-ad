import { Action, createReducer, on } from '@ngrx/store';
import { CoreState, INIT_CORE_STATE, INIT_STATISTIC } from './state';
import { clearStatistic, getStatisticSuccess } from './actions';

const reducer = createReducer(
  INIT_CORE_STATE,
  on(getStatisticSuccess, (state, { statistic }) => ({
    ...state,
    statistic,
  })),
  on(clearStatistic, (state) => ({
    ...state,
    statistic: INIT_STATISTIC,
  }))
);

export function reducers(
  state: CoreState | undefined,
  action: Action
): CoreState {
  return reducer(state, action);
}
