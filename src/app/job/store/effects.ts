import {Injectable} from "@angular/core";
import {JobApi} from "../api/job.api";
import {Actions} from "@ngrx/effects";

@Injectable()
export class JobEffects {
  constructor(private api: JobApi,
              private actions$: Actions) {
  }
}
