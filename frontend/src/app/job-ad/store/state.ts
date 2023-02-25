import { JobAd } from '../model/job-ad';
import { SearchResponse } from '../model/search-job-ad';

export interface JobState {
  jobAd: JobAd | null;
  jobAds: JobAd[];
  searchResponse: SearchResponse | null;
}

export const INIT_SEARCH_RESPONSE: SearchResponse = {
  data: [],
  count: 0,
};

export const INIT_JOB_STATE: JobState = {
  jobAd: null,
  jobAds: [],
  searchResponse: INIT_SEARCH_RESPONSE,
};
