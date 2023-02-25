import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectStatistic } from '../../store/selectors';
import { Observable } from 'rxjs';
import { Statistic } from '../../model/statistic';
import { CoreActions } from '../../index';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, OnDestroy {
  private readonly store$ = inject(Store);

  statistic$: Observable<Statistic> = this.store$.select(
    selectStatistic
  ) as Observable<Statistic>;

  ngOnInit() {
    this.store$.dispatch(CoreActions.getStatistic());
  }

  ngOnDestroy() {
    this.store$.dispatch(CoreActions.clearStatistic());
  }
}
