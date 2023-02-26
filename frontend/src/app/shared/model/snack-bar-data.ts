import { MatSnackBar, MatSnackBarRef } from '@angular/material/snack-bar';

export interface SnackBarData {
  message: string;
  snackType: string;
  snackBarRef: MatSnackBarRef<MatSnackBar>;
}
