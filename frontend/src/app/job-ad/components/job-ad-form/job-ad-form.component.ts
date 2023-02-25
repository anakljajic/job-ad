import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {JobAd, JobAdStatus, statuses} from "../../model/job-ad";


@Component({
  selector: 'app-job-ad-form',
  templateUrl: './job-ad-form.component.html',
  styleUrls: ['./job-ad-form.component.scss']
})
export class JobAdFormComponent {

  _jobAd?: JobAd;

  chipSkills: string[] = [];

  formGroup = this.formBuilder.group({
    title: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required]
    }),
    description: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(10)]
    }),
    skills: new FormControl([] as string[], {
      nonNullable: true,
      validators: Validators.required
    })
  });

  get title() {
    return this.formGroup.get('title');
  }

  get skills() {
    return this.formGroup.get('skills');
  }

  get description() {
    return this.formGroup.get('description');
  }

  @Input() set jobAd(jobAd: JobAd | null | undefined) {
    if (jobAd) {
      this._jobAd = {...jobAd};
      this.chipSkills = [...this._jobAd.skills];
      this.formGroup.patchValue(jobAd);
    } else {
      this.formGroup.reset();
    }
  }

  @Output() save = new EventEmitter<JobAd>();

  constructor(private formBuilder: FormBuilder) {
  }

  onSave(status: string): void {
    if (this.checkValuePresent(status)) {
      this.save.emit({...this.formGroup.getRawValue(), status} as JobAd);
    }
  }

  checkValuePresent(status: string): status is JobAdStatus {
    return ['draft', 'published', 'archived'].includes(status);
  }

}
