import {JobAd} from "../model/job-ad";
import {SearchResponse} from "../model/search-job-ad";

export interface JobState {
  jobAd: JobAd | null;
  jobAds: JobAd[];
  searchResponse: SearchResponse | null;
}

export const INIT_JOB_STATE: JobState = {
  jobAd: null,
  jobAds: [],
  searchResponse: null

}
