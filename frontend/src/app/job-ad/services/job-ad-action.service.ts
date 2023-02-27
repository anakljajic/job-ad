import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { ActivatedRoute, Router } from '@angular/router';
import { JobAdActions } from '../index';
import { JobAd } from '../model/job-ad';
import { ViewJobAdDialogComponent } from '../modal/view-job-ad/view-job-ad-dialog.component';
import { MenuItem } from '../../shared/model/menu-item';
import { SharedActions } from '../../shared';

@Injectable()
export class JobAdActionService {
  constructor(
    private store$: Store,
    private dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  get getMenuItems(): MenuItem[] {
    return [
      {
        icon: 'edit',
        text: 'Edit',
        action: (jobAd: JobAd) => {
          this.editJobAd(jobAd);
        },
      },
      {
        icon: 'remove_red_eye',
        text: 'Preview',
        action: (jobAd: JobAd) => {
          this.previewJobAd(jobAd);
        },
      },
      {
        icon: 'publish',
        text: 'Publish',
        condition: (jobAd: JobAd) => jobAd.status === 'draft',
        action: (jobAd: JobAd) => {
          this.changeJobAdStatus({ ...jobAd, status: 'published' });
        },
      },
      {
        icon: 'archive',
        text: 'Archive',
        condition: (jobAd: JobAd) => jobAd.status !== 'archived',
        action: (jobAd: JobAd) => {
          this.changeJobAdStatus({ ...jobAd, status: 'archived' });
        },
      },
    ];
  }

  previewJobAd(jobAd: JobAd): void {
    this.dialog.open(ViewJobAdDialogComponent, {
      data: { jobAd: jobAd },
    });
  }

  editJobAd(jobAd: JobAd): void {
    this.store$.dispatch(
      SharedActions.navigate({ url: ['jobs', 'edit', jobAd.id.toString()] })
    );
  }

  changeJobAdStatus(jobAd: JobAd): void {
    this.store$.dispatch(JobAdActions.changeJobAdStatus({ jobAd }));
  }
}
