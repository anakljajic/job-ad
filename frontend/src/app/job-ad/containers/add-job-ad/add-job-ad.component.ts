import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { JobAd } from '../../model/job-ad';
import { JobAdActions } from '../../index';

@Component({
  selector: 'app-add-job-ad',
  templateUrl: './add-job-ad.component.html',
  styleUrls: ['./add-job-ad.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddJobAdComponent {
  private readonly store = inject(Store);

  saveJobAd(jobAd: Omit<JobAd, 'id'>): void {
    this.store.dispatch(JobAdActions.addJobAd({ jobAd }));
  }
}
