import { Component, OnDestroy, OnInit } from '@angular/core';
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
  readonly statistic$: Observable<Statistic>;

  constructor(private store$: Store) {
    this.statistic$ = this.store$.select(selectStatistic);
  }

  ngOnInit() {
    this.store$.dispatch(CoreActions.getStatistic());
  }

  ngOnDestroy() {
    this.store$.dispatch(CoreActions.clearStatistic());
  }
}
