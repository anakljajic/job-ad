import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { JobAd, JobAdStatus } from '../../model/job-ad';

@Component({
  selector: 'app-job-ad-form',
  templateUrl: './job-ad-form.component.html',
  styleUrls: ['./job-ad-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JobAdFormComponent {
  _jobAd!: JobAd;

  chipSkills: string[] = [];

  readonly statuses: JobAdStatus[] = ['draft', 'published', 'archived'];

  formGroup = this.formBuilder.group({
    title: new FormControl('', {
      validators: [Validators.required],
    }),
    description: new FormControl('', {
      validators: [Validators.required, Validators.minLength(10)],
    }),
    skills: new FormControl([] as string[], {
      validators: Validators.required,
    }),
    status: new FormControl('draft', {
      validators: Validators.required,
    }),
  });

  @Input() set jobAd(jobAd: JobAd | null | undefined) {
    if (jobAd) {
      this._jobAd = { ...jobAd };
      this.chipSkills = [...this._jobAd.skills];
      this.formGroup.patchValue(jobAd);
      if (jobAd.status.includes('archived')) {
        this.status?.disable();
      }
    } else {
      this.formGroup.reset();
    }
  }

  @Output() save = new EventEmitter<JobAd>();

  get title() {
    return this.formGroup.get('title');
  }

  get skills() {
    return this.formGroup.get('skills');
  }

  get description() {
    return this.formGroup.get('description');
  }

  get status() {
    return this.formGroup.get('status');
  }

  constructor(private formBuilder: FormBuilder) {}

  onSave(): void {
    this.save.emit({ ...this.formGroup.getRawValue() } as JobAd);
  }
}
