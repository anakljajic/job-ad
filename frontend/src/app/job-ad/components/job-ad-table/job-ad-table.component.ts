import { Component, Input } from '@angular/core';
import { JobAd } from '../../model/job-ad';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-job-ad-table',
  templateUrl: './job-ad-table.component.html',
  styleUrls: ['./job-ad-table.component.scss'],
})
export class JobAdTableComponent {
  @Input() dataSource!: MatTableDataSource<JobAd>;
  @Input() menuItems: any;
  displayedColumns: string[] = [
    'id',
    'title',
    'description',
    'skills',
    'status',
    'actions',
  ];

  constructor() {}
}
