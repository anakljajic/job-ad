import {createAction, props, union} from "@ngrx/store";

export const enum ESharedActions {
  Navigate = '[Shared] Navigate',
  Message = '[Shared] Message'
}

export const navigate = createAction(ESharedActions.Navigate, props<{ url: string[] }>());
export const message = createAction(ESharedActions.Message, props<{ message: string }>());

export const all = union({
    navigate,
    message
  }
);

export type SharedActions = typeof all;
