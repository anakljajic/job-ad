export interface SearchRequest {
  title: string;
  status: string[];
  limit: number;
  offset: number;
}

export interface SearchResponse {
  data: any[];
  count: number;
}
