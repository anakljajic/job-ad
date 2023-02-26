import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CustomSnackBarComponent } from '../components/custom-snack-bar/custom-snack-bar.component';

@Injectable({
  providedIn: 'root',
})
export class SnackBarServiceService {
  constructor(private snackBar: MatSnackBar) {}

  public openSnackBar(message: string, snackType?: 'success' | 'error'): void {
    this.snackBar.openFromComponent(CustomSnackBarComponent, {
      duration: 5000,
      horizontalPosition: 'right',
      verticalPosition: 'bottom',
      panelClass: ['snackbar'],
      data: {
        message: message,
        snackType: snackType,
        snackBarRef: this.snackBar,
      },
    });
  }
}
