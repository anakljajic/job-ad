import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectJobAd } from '../../store/selectors';
import { JobAdActions } from '../../index';
import { ActivatedRoute } from '@angular/router';
import { JobAd } from '../../model/job-ad';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-job-ad',
  templateUrl: './edit-job-ad.component.html',
  styleUrls: ['./edit-job-ad.component.scss'],
})
export class EditJobAdComponent implements OnInit, OnDestroy {
  private readonly store = inject(Store);
  readonly jobAd$ = this.store.select(selectJobAd);

  private routeSubscription: Subscription | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.routeSubscription = this.route.params.subscribe((params) => {
      this.store.dispatch(JobAdActions.getJobAdById({ id: params['id'] }));
    });
  }

  updateJobAd(updatedJobAd: JobAd, id: number): void {
    this.store.dispatch(
      JobAdActions.updateJobAd({ jobAd: { ...updatedJobAd, id } })
    );
  }

  ngOnDestroy(): void {
    this.routeSubscription?.unsubscribe();
  }
}
