import { Component, Inject, Optional } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { JobAd } from '../../model/job-ad';

@Component({
  selector: 'app-view-job-ad',
  templateUrl: './view-job-ad-dialog.component.html',
  styleUrls: ['./view-job-ad-dialog.component.scss'],
})
export class ViewJobAdDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { jobAd: JobAd },
    @Optional() private dialogRef: MatDialogRef<ViewJobAdDialogComponent>
  ) {}
}
