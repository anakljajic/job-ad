import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {JobFormComponent} from './components/job-form/job-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import { JobListComponent } from './components/job-list/job-list.component';
import {MatChipsModule} from "@angular/material/chips";
import {MatIconModule} from "@angular/material/icon";
import { AddJobComponent } from './containers/add-job/add-job.component';
import {SharedModule} from "../shared/shared.module";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    JobFormComponent,
    JobListComponent,
    AddJobComponent
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
    MatButtonModule
  ]
})
export class JobComponentsModule {
}
