import {ChangeDetectorRef, Component, inject, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormControl} from "@angular/forms";
import {MatPaginator} from "@angular/material/paginator";
import {Observable} from "rxjs";
import {MatTableDataSource} from "@angular/material/table";
import {JobAd, statuses} from "../../model/job-ad";
import {Store} from "@ngrx/store";
import {selectJobAdSearchResponse} from "../../store/selectors";
import {JobAdActions} from "../../index";
import {SearchRequest} from "../../model/search-job-ad";
import {JobAdActionService} from "../../services/job-ad-action.service";

@Component({
  selector: 'app-view-jobs',
  templateUrl: './view-job-ads.component.html',
  styleUrls: ['./view-job-ads.component.scss']
})
export class ViewJobAdsComponent implements OnInit, OnDestroy {
  private readonly store = inject(Store);
  readonly jodAdsSearchResponse$ = this.store.select(selectJobAdSearchResponse);
  readonly menuItems = this.jobAdService.getMenuItems;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  jobAds!: Observable<any>;
  dataSource: MatTableDataSource<JobAd> = new MatTableDataSource<JobAd>([]);

  tableView = false;
  cardView = true;

  statuses = statuses;

  formGroup = this.formBuilder.group({
    search: new FormControl(''),
    status: new FormControl('')
  });

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private route: ActivatedRoute,
              private cdr: ChangeDetectorRef,
              private jobAdService: JobAdActionService) {
  }

  ngOnInit(): void {
    this.store.dispatch(JobAdActions.searchJobAds({searchRequest: {limit: 6, offset: 0} as SearchRequest}));
    this.jodAdsSearchResponse$.subscribe(searchResponse => {
      if (searchResponse?.data) this.dataSource.data = searchResponse?.data;
    });

    this.cdr.detectChanges();
    this.dataSource.paginator = this.paginator;
    this.jobAds = this.dataSource.connect();
  }

  ngOnDestroy(): void {
    if (this.dataSource) {
      this.dataSource.disconnect();
    }
  }

  onClick(): void {
    this.router.navigate(['add'], {relativeTo: this.route});
  }

  switchToTable(): void {
    this.tableView = true;
    this.cardView = false;
  }

  switchToCard(): void {
    this.tableView = false;
    this.cardView = true;
  }
}
