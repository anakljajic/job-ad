export enum ECallToAction {
  ARCHIVE,
  PUBLISH,
  PREVIEW,
  EDIT
}

export interface CallAction {
  action: ECallToAction;
  payload: any;
}
