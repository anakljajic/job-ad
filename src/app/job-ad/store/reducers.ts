import {Action, createReducer} from "@ngrx/store";
import {cloneDeep} from "lodash-es";
import {INIT_JOB_STATE, JobState} from "./state";

const reducer = createReducer(
  cloneDeep(INIT_JOB_STATE)
)

export function reducers(state: JobState | undefined, action: Action): JobState {
  return reducer(state, action);
}
