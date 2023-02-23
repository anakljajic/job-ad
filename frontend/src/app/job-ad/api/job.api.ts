import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

const JOB_API = '';

@Injectable()
export class JobApi {
  constructor(private http: HttpClient) {
  }

}
