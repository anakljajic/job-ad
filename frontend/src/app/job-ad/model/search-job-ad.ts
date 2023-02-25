import { JobAd } from './job-ad';

export interface SearchRequest {
  title?: string | null;
  status?: string[] | null;
  limit: number;
  offset: number;
}

export interface SearchResponse {
  data: JobAd[];
  count: number;
}
