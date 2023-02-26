import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobAdFormComponent } from './components/job-ad-form/job-ad-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddJobAdComponent } from './containers/add-job-ad/add-job-ad.component';
import { SharedModule } from '../shared/shared.module';
import { ViewJobAdsComponent } from './containers/view-job-ads/view-job-ads.component';
import { EditJobAdComponent } from './containers/edit-job-ad/edit-job-ad.component';
import { JobAdTableComponent } from './components/job-ad-table/job-ad-table.component';
import { JobAdCardsComponent } from './components/job-ad-cards/job-ad-cards.component';
import { ViewJobAdDialogComponent } from './modal/view-job-ad/view-job-ad-dialog.component';
import { FilterStatusPipe } from './pipes/filter-status.pipe';
import { LetModule } from '@ngrx/component';
import { MaterialModule } from '../material.module';

@NgModule({
  declarations: [
    JobAdFormComponent,
    JobAdTableComponent,
    AddJobAdComponent,
    ViewJobAdsComponent,
    JobAdCardsComponent,
    EditJobAdComponent,
    ViewJobAdDialogComponent,
    FilterStatusPipe,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    LetModule,
    MaterialModule,
  ],
  entryComponents: [ViewJobAdDialogComponent],
})
export class JobAdComponentsModule {}
