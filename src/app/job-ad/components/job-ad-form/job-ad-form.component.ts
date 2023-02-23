import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {JobAd, JobAdStatus} from "../../model/job";
import {COMMA, ENTER, TAB} from "@angular/cdk/keycodes";
import {MatChipEditedEvent, MatChipInputEvent} from "@angular/material/chips";

@Component({
  selector: 'app-job-ad-form',
  templateUrl: './job-ad-form.component.html',
  styleUrls: ['./job-ad-form.component.scss']
})
export class JobAdFormComponent {

  @Input() set jobAd(job: JobAd | null | undefined) {
    if (job) {
      this._jobAd = job;
      this.formGroup.patchValue(job);
    } else {
      this.formGroup.reset();
    }
  }

  @Output() save = new EventEmitter<Omit<JobAd, 'id'>>();

  _jobAd?: JobAd;

  formGroup = this.formBuilder.group({
    title: new FormControl('', {nonNullable: true, validators: [Validators.required]}),
    description: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(10)]
    }),
    skills: new FormControl([] as string[], {nonNullable: true, validators: Validators.required})
  });

  get title() {
    return this.formGroup.get('title');
  }

  get description() {
    return this.formGroup.get('description');
  }

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

  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA, TAB] as const;
  skills: string[] = [];

  add(event: MatChipInputEvent): void {
    const skill = (event.value || '').trim();

    if (skill) {
      this.skills.push(skill);
    }

    event.chipInput!.clear();
  }

  remove(skill: string): void {
    const index = this.skills.indexOf(skill);

    if (index >= 0) {
      this.skills.splice(index, 1);
    }
  }

  edit(skill: string, event: MatChipEditedEvent) {
    const value = event.value.trim();

    if (!value) {
      this.remove(skill);
      return;
    }

    const index = this.skills.indexOf(skill);
    if (index >= 0) {
      this.skills[index] = value;
    }
  }

}
