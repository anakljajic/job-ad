import {Component, EventEmitter, Input, Output} from '@angular/core';
import {JobAd} from "../../model/job-ad";
import {CallAction, ECallToAction} from "../../model/call-to-action";

@Component({
  selector: 'app-job-ad-cards',
  templateUrl: './job-ad-cards.component.html',
  styleUrls: ['./job-ad-cards.component.scss']
})
export class JobAdCardsComponent {
  readonly action = ECallToAction;

  @Input() jobAds: JobAd[] = [];
  @Output() callToAction: EventEmitter<CallAction> = new EventEmitter<CallAction>();

  constructor() {
  }

  call(cto: ECallToAction, payload?: any): void {
    this.callToAction.emit({action: cto, payload} as CallAction);
  }

}
