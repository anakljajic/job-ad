import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {JobAdFormComponent} from './components/job-ad-form/job-ad-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {JobAdTableComponent} from './components/view-job-ads/job-ad-table/job-ad-table.component';
import {MatChipsModule} from "@angular/material/chips";
import {MatIconModule} from "@angular/material/icon";
import {AddJobAdComponent} from './containers/add-job-ad/add-job-ad.component';
import {SharedModule} from "../shared/shared.module";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatTableModule} from "@angular/material/table";
import {MatMenuModule} from "@angular/material/menu";
import {ViewJobAdsComponent} from './components/view-job-ads/view-job-ads.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSelectModule} from "@angular/material/select";
import {MatGridListModule} from "@angular/material/grid-list";
import { JobAdCardsComponent } from './components/view-job-ads/job-ad-cards/job-ad-cards.component';
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatDividerModule} from "@angular/material/divider";


@NgModule({
  declarations: [
    JobAdFormComponent,
    JobAdTableComponent,
    AddJobAdComponent,
    ViewJobAdsComponent,
    JobAdCardsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatChipsModule,
    MatIconModule,
    SharedModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatMenuModule,
    MatDialogModule,
    MatPaginatorModule,
    MatSelectModule,
    MatGridListModule,
    MatTooltipModule,
    MatDividerModule
  ]
})
export class JobComponentsModule {
}