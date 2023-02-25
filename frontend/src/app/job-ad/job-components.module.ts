import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {JobAdFormComponent} from './components/job-ad-form/job-ad-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatChipsModule} from "@angular/material/chips";
import {MatIconModule} from "@angular/material/icon";
import {AddJobAdComponent} from './containers/add-job-ad/add-job-ad.component';
import {SharedModule} from "../shared/shared.module";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatTableModule} from "@angular/material/table";
import {MatMenuModule} from "@angular/material/menu";
import {ViewJobAdsComponent} from './containers/view-job-ads/view-job-ads.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSelectModule} from "@angular/material/select";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatDividerModule} from "@angular/material/divider";
import {EditJobAdComponent} from './containers/edit-job-ad/edit-job-ad.component';
import {JobAdTableComponent} from "./components/job-ad-table/job-ad-table.component";
import {JobAdCardsComponent} from "./components/job-ad-cards/job-ad-cards.component";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {ViewJobAdDialogComponent} from './modal/view-job-ad/view-job-ad-dialog.component';


@NgModule({
  declarations: [
    JobAdFormComponent,
    JobAdTableComponent,
    AddJobAdComponent,
    ViewJobAdsComponent,
    JobAdCardsComponent,
    EditJobAdComponent,
    ViewJobAdDialogComponent
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
    MatDividerModule,
    MatSlideToggleModule
  ],
  entryComponents: [ViewJobAdDialogComponent]
})
export class JobComponentsModule {
}
