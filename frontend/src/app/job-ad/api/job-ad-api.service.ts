import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JobAd } from '../model/job-ad';
import { SearchRequest, SearchResponse } from '../model/search-job-ad';
import { JOB_AD_API } from '../constants/constants';

@Injectable()
export class JobAdApi {
  constructor(private http: HttpClient) {}

  getJobAdById(id: number): Observable<JobAd> {
    return this.http.get<JobAd>(JOB_AD_API + '/' + id);
  }

  addJobAd(jobAd: Omit<JobAd, 'id'>): Observable<JobAd> {
    return this.http.post<JobAd>(JOB_AD_API + '/add', jobAd);
  }

  updateJobAd(jobAd: JobAd): Observable<JobAd> {
    return this.http.put<JobAd>(JOB_AD_API + '/' + jobAd.id, jobAd);
  }

  getAllJobAds(): Observable<JobAd[]> {
    return this.http.get<JobAd[]>(JOB_AD_API + '/all');
  }

  searchJobAds(searchRequest: SearchRequest): Observable<SearchResponse> {
    return this.http.post<SearchResponse>(
      JOB_AD_API + '/search',
      searchRequest
    );
  }
}
