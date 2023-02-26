import { createAction, props, union } from '@ngrx/store';

export const enum ESharedActions {
  Navigate = '[Shared] Navigate',
  ShowSuccessMessage = '[Shared] Show Success Message',
  ShowErrorMessage = '[Shared] Show Error Message',
}

export const navigate = createAction(
  ESharedActions.Navigate,
  props<{ url: string[] }>()
);

export const showSuccessMessage = createAction(
  ESharedActions.ShowSuccessMessage,
  props<{ message: string }>()
);

export const showErrorMessage = createAction(
  ESharedActions.ShowErrorMessage,
  props<{ message: string }>()
);

export const all = union({
  navigate,
  showSuccessMessage,
  showErrorMessage,
});

export type SharedActions = typeof all;
