import {Component, Input} from '@angular/core';
import {JobAd} from "../../model/job-ad";

@Component({
  selector: 'app-job-ad-cards',
  templateUrl: './job-ad-cards.component.html',
  styleUrls: ['./job-ad-cards.component.scss']
})
export class JobAdCardsComponent {
  @Input() jobAds: JobAd[] = [];
  @Input() menuItems: any;

  constructor() {
  }

}
