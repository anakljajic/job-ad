import {inject, Injectable} from "@angular/core";
import {MatDialog} from "@angular/material/dialog";
import {Store} from "@ngrx/store";
import {ActivatedRoute, Router} from "@angular/router";
import {JobAdActions} from "../index";
import {JobAd} from "../model/job-ad";
import {ViewJobAdDialogComponent} from "../modal/view-job-ad/view-job-ad-dialog.component";

@Injectable()
export class JobAdActionService {
  private readonly store = inject(Store);

  constructor(private dialog: MatDialog, private router: Router, private route: ActivatedRoute) {
  }

  get getMenuItems() {
    return [
      {
        icon: 'edit', text: 'Edit', action: (jobAd: JobAd) => {
          this.editJobAd(jobAd);
        }
      },
      {
        icon: 'remove_red_eye', text: 'Preview', action: (jobAd: JobAd) => {
          this.previewJobAd(jobAd);
        }
      },
      {
        icon: 'publish',
        text: 'Publish',
        condition: (jobAd: JobAd) => jobAd.status === 'draft',
        action: (jobAd: JobAd) => {
          this.updateJobAd({...jobAd, status: 'published'});
        }
      },
      {
        icon: 'archive',
        text: 'Archive',
        condition: (jobAd: JobAd) => jobAd.status !== 'archived',
        action: (jobAd: JobAd) => {
          this.updateJobAd({...jobAd, status: 'archived'});
        }
      }
    ]
  }

  previewJobAd(jobAd: JobAd): void {
    this.dialog.open(ViewJobAdDialogComponent, {
      data: {id: jobAd.id}
    })
  }

  editJobAd(jobAd: JobAd): void {
    this.router.navigate(['jobs', 'edit', jobAd.id], {relativeTo: this.route});
  }

  updateJobAd(jobAd: JobAd): void {
    this.store.dispatch(JobAdActions.updateJobAd({jobAd}));
  }
}
