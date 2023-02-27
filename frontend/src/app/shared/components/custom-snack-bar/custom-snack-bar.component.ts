import { Component, Inject, OnInit } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { SnackBarData } from '../../model/snack-bar-data';

@Component({
  selector: 'app-custom-snack-bar',
  templateUrl: './custom-snack-bar.component.html',
  styleUrls: ['./custom-snack-bar.component.scss'],
})
export class CustomSnackBarComponent implements OnInit {
  icon: string;
  type: string;

  get getIcon(): string {
    switch (this.data.snackType) {
      case 'success':
        return 'done';
      case 'error':
        return 'error';
      default:
        return 'success';
    }
  }

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: SnackBarData) {
    this.icon = this.getIcon;
    this.type = this.data.snackType;
  }

  ngOnInit(): void {}

  click(): void {
    this.data.snackBarRef.dismiss();
  }
}
