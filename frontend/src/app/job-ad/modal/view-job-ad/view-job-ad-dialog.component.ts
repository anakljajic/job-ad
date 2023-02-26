import { Component, Inject, inject, OnInit, Optional } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogConfig,
} from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { selectJobAd } from '../../store/selectors';
import { JobAdActions } from '../../index';

@Component({
  selector: 'app-view-job-ad',
  templateUrl: './view-job-ad-dialog.component.html',
  styleUrls: ['./view-job-ad-dialog.component.scss'],
})
export class ViewJobAdDialogComponent implements OnInit {
  private readonly store$ = inject(Store);
  readonly jobAd$ = this.store$.select(selectJobAd);

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { id: number },
    @Optional() private dialogRef: MatDialogRef<ViewJobAdDialogComponent>
  ) {}

  ngOnInit(): void {
    this.store$.dispatch(JobAdActions.getJobAdById({ id: this.data.id }));
  }
}
