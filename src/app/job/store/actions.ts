import {union} from "@ngrx/store";

export const enum EJobActions {

}

export const all = union(
  {}
);

export type Actions = typeof all;
