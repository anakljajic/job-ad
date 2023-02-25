import { Statistic } from '../model/statistic';

export interface CoreState {
  statistic: Statistic;
}

export const INIT_STATISTIC: Statistic = {
  draft: 0,
  archived: 0,
  published: 0,
};

export const INIT_CORE_STATE: CoreState = {
  statistic: INIT_STATISTIC,
};
