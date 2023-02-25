import { Pipe, PipeTransform } from '@angular/core';
import { JobAd, JobAdStatus } from '../model/job-ad';

@Pipe({
  name: 'filterStatus',
})
export class FilterStatusPipe implements PipeTransform {
  transform(statuses: JobAdStatus[], jobAd: JobAd): JobAdStatus[] {
    if (!jobAd) return ['draft', 'published'];

    switch (jobAd.status) {
      case 'published':
        return ['published', 'archived'];
      case 'archived':
        return ['archived'];
      default:
        return statuses;
    }
  }
}
