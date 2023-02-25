import {inject, Injectable} from "@angular/core";
import {MatDialog} from "@angular/material/dialog";
import {Store} from "@ngrx/store";
import {ActivatedRoute, Router} from "@angular/router";
import {JobAdActions} from "../index";
import {JobAd} from "../model/job-ad";
import {ViewJobAdDialogComponent} from "../modal/view-job-ad/view-job-ad-dialog.component";

@Injectable()
export class CallJobAdActionService {
  private readonly store = inject(Store);

  constructor(private dialog: MatDialog, private router: Router, private route: ActivatedRoute) {
  }

  previewJobAd(jobAd: JobAd): void {
    this.dialog.open(ViewJobAdDialogComponent, {
      data: {id: jobAd.id}
    })
  }

  editJobAd(id: number): void {
    this.router.navigate(['jobs', 'edit', id], {relativeTo: this.route});
  }

  updateJobAd(jobAd: JobAd): void {
    console.log('Service: ' + jobAd);
    this.store.dispatch(JobAdActions.updateJobAd({jobAd}));
  }
}
