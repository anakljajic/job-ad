import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Statistic } from '../model/statistic';

@Injectable()
export class CoreApi {
  readonly JOB_AD_API = 'api/job-ads/';

  constructor(private http: HttpClient) {}

  getStatistic(): Observable<Statistic> {
    return this.http.get<Statistic>(this.JOB_AD_API + 'statistic');
  }
}
