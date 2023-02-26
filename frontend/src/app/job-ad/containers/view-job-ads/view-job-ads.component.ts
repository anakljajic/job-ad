import {
  AfterContentInit,
  ChangeDetectorRef,
  Component,
  inject,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl } from '@angular/forms';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { debounceTime, map, Subscription, take } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { JobAd, JobAdStatus } from '../../model/job-ad';
import { Store } from '@ngrx/store';
import { selectJobAdSearchResponse } from '../../store/selectors';
import { JobAdActions } from '../../index';
import { SearchRequest } from '../../model/search-job-ad';
import { JobAdActionService } from '../../services/job-ad-action.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-view-jobs',
  templateUrl: './view-job-ads.component.html',
  styleUrls: ['./view-job-ads.component.scss'],
})
export class ViewJobAdsComponent
  implements OnInit, AfterContentInit, OnDestroy
{
  private readonly store$ = inject(Store);
  readonly jodAdsSearchResponse$ = this.store$.select(
    selectJobAdSearchResponse
  );
  isSmallScreen$ = this.breakpointObserver
    .observe([Breakpoints.XSmall])
    .pipe(map((result) => result.matches));

  readonly menuItems = this.jobAdService.getMenuItems;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  dataSource: MatTableDataSource<JobAd> = new MatTableDataSource<JobAd>([]);

  isTableView = false;

  readonly statuses: JobAdStatus[] = ['draft', 'published', 'archived'];

  formGroup = this.formBuilder.group({
    search: new FormControl(''),
    status: new FormControl([] as string[]),
  });

  searchRequest: SearchRequest = {
    limit: 6,
    offset: 0,
  };

  formSubscription: Subscription | undefined;
  jobAdSearchResponseSubscription: Subscription | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef,
    private jobAdService: JobAdActionService,
    private breakpointObserver: BreakpointObserver
  ) {}

  ngOnInit(): void {
    this.isSmallScreen$.subscribe((value) => {
      if (value) {
        this.isTableView = false;
      }
    });

    this.formSubscription = this.formGroup.valueChanges
      .pipe(debounceTime(300))
      .subscribe((_) => {
        this.searchRequest = {
          ...this.searchRequest,
          title: this.formGroup.get('search')?.value,
          status: this.formGroup.get('status')?.value,
        };

        this.store$.dispatch(
          JobAdActions.searchJobAds({ searchRequest: this.searchRequest })
        );
      });

    this.jodAdsSearchResponse$.subscribe((searchResponse) => {
      if (searchResponse?.data) this.dataSource.data = searchResponse?.data;
    });

    this.cdr.detectChanges();
    this.dataSource.paginator = this.paginator;
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
        status: value['status'],
      };

      if (this.paginator) {
        this.paginator.pageSize = this.searchRequest.limit;
        this.paginator.pageIndex = this.searchRequest.offset;
      }

      this.formGroup.patchValue({
        search: this.searchRequest.title,
        status: this.searchRequest.status,
      });

      this.store$.dispatch(
        JobAdActions.searchJobAds({ searchRequest: this.searchRequest })
      );
    });
  }

  ngOnDestroy(): void {
    if (this.dataSource) {
      this.dataSource.disconnect();
    }
    this.store$.dispatch(JobAdActions.clearJobAdsSearchResponse());
    this.formSubscription?.unsubscribe();
    this.jobAdSearchResponseSubscription?.unsubscribe();
  }

  onClick(): void {
    this.router.navigate(['add'], { relativeTo: this.route });
  }

  toggleView(): void {
    this.isTableView = !this.isTableView;
  }

  changePagination($event: PageEvent): void {
    this.searchRequest = {
      ...this.searchRequest,
      limit: $event.pageSize,
      offset: $event.pageIndex,
    };

    this.store$.dispatch(
      JobAdActions.searchJobAds({
        searchRequest: this.searchRequest,
      })
    );
  }
}
