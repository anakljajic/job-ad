import {ChangeDetectorRef, Component, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {JobAd} from "../../../model/job";
import {MatTableDataSource} from "@angular/material/table";
import {Observable} from "rxjs";
import {MatPaginator} from "@angular/material/paginator";
import {INIT_DATA} from "../../../constants/job.init-data";

@Component({
  selector: 'app-job-ad-cards',
  templateUrl: './job-ad-cards.component.html',
  styleUrls: ['./job-ad-cards.component.scss']
})
export class JobAdCardsComponent {
  @Input() jobAds: JobAd[] = [];

  constructor() {
  }

  viewJob(job: JobAd): void {
    console.log('View: ' + job);
  }

  editJob(job: JobAd): void {
    console.log('Edit: ' + job);
  }

  publishJob(job: JobAd): void {
    console.log('Publish: ' + job);
  }

  archiveJob(job: JobAd): void {
    console.log('Archive: ' + job);
  }

}
