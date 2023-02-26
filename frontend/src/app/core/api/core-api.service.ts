import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Statistic } from '../model/statistic';
import { JOB_AD_API } from '../constants/constants';

@Injectable()
export class CoreApi {
  constructor(private http: HttpClient) {}

  getStatistic(): Observable<Statistic> {
    return this.http.get<Statistic>(JOB_AD_API + '/statistic');
  }
}
