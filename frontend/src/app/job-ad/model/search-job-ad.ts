import {JobAd} from "./job-ad";

export interface SearchRequest {
  title?: string;
  status?: string[];
  limit: number;
  offset: number;
}

export interface SearchResponse {
  data: JobAd[];
  count: number;
}
