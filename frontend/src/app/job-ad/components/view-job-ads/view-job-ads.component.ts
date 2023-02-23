import {ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormControl} from "@angular/forms";
import {INIT_DATA} from "../../constants/job.init-data";
import {MatPaginator} from "@angular/material/paginator";
import {Observable} from "rxjs";
import {MatTableDataSource} from "@angular/material/table";
import {JobAd} from "../../model/job";

@Component({
  selector: 'app-view-jobs',
  templateUrl: './view-job-ads.component.html',
  styleUrls: ['./view-job-ads.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ViewJobAdsComponent implements OnInit, OnDestroy {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  jobAds!: Observable<any>;
  dataSource: MatTableDataSource<JobAd> = new MatTableDataSource<JobAd>(INIT_DATA);

  readonly statuses: string[] = ['Draft', 'Published', 'Archived'];
  data = INIT_DATA;

  tableView = false;
  cardView = true;

  formGroup = this.formBuilder.group({
    search: new FormControl(''),
    status: new FormControl('')
  });

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private route: ActivatedRoute,
              private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
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
