import {
  AfterContentInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl } from '@angular/forms';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import {
  debounceTime,
  map,
  Observable,
  skip,
  Subject,
  take,
  takeUntil,
  tap,
} from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { JobAd, JobAdStatus } from '../../model/job-ad';
import { Store } from '@ngrx/store';
import { selectJobAdSearchResponse } from '../../store/selectors';
import { JobAdActions } from '../../index';
import { SearchRequest, SearchResponse } from '../../model/search-job-ad';
import { JobAdActionService } from '../../services/job-ad-action.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MenuItem } from '../../../shared/model/menu-item';
import { SharedActions } from '../../../shared';

@Component({
  selector: 'app-view-jobs',
  templateUrl: './view-job-ads.component.html',
  styleUrls: ['./view-job-ads.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewJobAdsComponent
  implements OnInit, AfterContentInit, OnDestroy
{
  private readonly jodAdsSearchResponse$: Observable<SearchResponse>;
  readonly menuItems: MenuItem[] = this.jobAdService.getMenuItems;
  readonly statuses: JobAdStatus[] = ['draft', 'published', 'archived'];
  readonly isSmallScreen$ = this.breakpointObserver
    .observe([Breakpoints.XSmall])
    .pipe(
      tap({
        next: (result) => {
          this.isTableView = !result;
        },
      }),
      map((result) => result.matches)
    );

  dataSource: MatTableDataSource<JobAd> = new MatTableDataSource<JobAd>([]);
  isTableView = false;
  formGroup = this.formBuilder.group({
    search: new FormControl('', {}),
    status: new FormControl([] as string[]),
  });
  private searchRequest: SearchRequest = {
    limit: 6,
    offset: 0,
  };
  totalElements = 0;
  private destroy$ = new Subject<void>();

  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;

  constructor(
    private store$: Store,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef,
    private jobAdService: JobAdActionService,
    private breakpointObserver: BreakpointObserver
  ) {
    this.jodAdsSearchResponse$ = this.store$.select(selectJobAdSearchResponse);
  }

  ngOnInit(): void {
    this.formGroup.valueChanges
      .pipe(debounceTime(300), takeUntil(this.destroy$))
      .subscribe((_) => {
        this.searchRequest = {
          limit: this.paginator.pageSize || 6,
          offset: 0,
          title: this.formGroup.get('search')?.value,
          status: this.formGroup.get('status')?.value,
        };

        this.store$.dispatch(
          JobAdActions.searchJobAds({ searchRequest: this.searchRequest })
        );
      });

    this.jodAdsSearchResponse$
      .pipe(takeUntil(this.destroy$))
      .subscribe((searchResponse) => {
        if (searchResponse?.data) {
          this.dataSource.data = searchResponse?.data;
          this.totalElements = searchResponse.count;
          if (this.paginator) {
            this.paginator.pageSize = this.searchRequest.limit;
            this.paginator.pageIndex =
              this.paginator.pageSize * this.paginator.pageIndex >
              searchResponse.count
                ? 0
                : this.searchRequest.offset / this.searchRequest.limit;
          }
          this.cdr.detectChanges();
        }
      });
  }

  ngAfterContentInit() {
    this.getInitialSearchRequest();
  }

  getInitialSearchRequest() {
    this.route.queryParams.pipe(take(1)).subscribe((value) => {
      this.searchRequest = {
        ...this.searchRequest,
        limit: value['limit'] || 6,
        offset: value['offset'] || 0,
        title: value['title'],
        status: value['status'] && Array.of(value['status']),
      };

      this.searchRequest.title &&
        this.formGroup.controls.search.patchValue(this.searchRequest.title, {
          emitEvent: false,
        });
      this.searchRequest.status &&
        this.formGroup.controls.status.patchValue(this.searchRequest.status, {
          emitEvent: false,
        });

      this.store$.dispatch(
        JobAdActions.searchJobAds({ searchRequest: this.searchRequest })
      );
    });
  }

  onClick(): void {
    this.store$.dispatch(SharedActions.navigate({ url: ['jobs', 'add'] }));
  }

  toggleView(): void {
    this.isTableView = !this.isTableView;
  }

  changePagination($event: PageEvent): void {
    this.searchRequest = {
      ...this.searchRequest,
      limit: $event.pageSize,
      offset: $event.pageIndex * $event.pageSize,
    };

    this.store$.dispatch(
      JobAdActions.searchJobAds({
        searchRequest: this.searchRequest,
      })
    );
  }

  ngOnDestroy(): void {
    if (this.dataSource) {
      this.dataSource.disconnect();
    }
    this.store$.dispatch(JobAdActions.clearJobAdsSearchResponse());
    this.destroy$.next();
    this.destroy$.complete();
  }
}
