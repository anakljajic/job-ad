import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {JobAd} from "../model/job-ad";
import {SearchRequest, SearchResponse} from "../model/search-job-ad";

@Injectable()
export class JobAdApi {
  readonly JOB_AD_API = 'api/jobs';

  constructor(private http: HttpClient) {
  }

  getJobAdById(id: number): Observable<JobAd> {
    return this.http.get<JobAd>(this.JOB_AD_API + '/' + id);
  }

  addJobAd(jobAd: Omit<JobAd, 'id'>): Observable<JobAd> {
    return this.http.post<JobAd>(this.JOB_AD_API, jobAd);
  }

  updateJobAd(jobAd: JobAd): Observable<JobAd> {
    return this.http.put<JobAd>(this.JOB_AD_API, jobAd);
  }

  getAllJobAds(): Observable<JobAd[]> {
    return this.http.get<JobAd[]>(this.JOB_AD_API + '/all');
  }

  searchJobAds(searchRequest: SearchRequest): Observable<SearchResponse> {
    return this.http.post<SearchResponse>(this.JOB_AD_API + '/search', searchRequest);
  }
}
