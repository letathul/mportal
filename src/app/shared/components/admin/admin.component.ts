import { Component } from '@angular/core';
import { JboxitemComponent } from '../../jboxitem/jboxitem.component';
import { Job } from '../../../job/job.model';
import { SamlpeDataService } from '../../service/samlpe-data.service';
import { GetJobServiceService } from '../../service/job/get-job-service.service';
import { CommonModule } from '@angular/common';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [JboxitemComponent, CommonModule, ReactiveFormsModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css',
})
export class AdminComponent {
  jobForm: FormGroup;
  jobs: Job[] = [];

  constructor(
    private fb: FormBuilder,
    private jobService: GetJobServiceService
  ) {
    this.jobForm = this.fb.group({
      id: [''],
      title: ['', Validators.required],
      companyName: ['', Validators.required],
      location: ['', Validators.required],
      workType: ['', Validators.required],
      jobType: ['', Validators.required],
      jobCategory: ['', Validators.required],
      educationQualification: ['', Validators.required],
      jobDescription: ['', Validators.required],
      payScale: ['', Validators.required],
      skills: this.fb.array([this.createSkillFormGroup()]),
    });
  }

  onSubmit(): void {
    const job: Job = this.jobForm.value;
    if (job.id) {
      this.jobService.updateJob(job.id, job).then(() => {
        this.loadJobs();
      });
    } else {
      this.jobService.addJob(job).then(() => {
        this.loadJobs();
      });
    }
    this.jobForm.reset();
  }

  ngOnInit(): void {
    this.loadJobs();
  }

  createSkillFormGroup(): FormGroup {
    return this.fb.group({
      skill: ['', Validators.required],
    });
  }

  get skills(): FormArray {
    return this.jobForm.get('skills') as FormArray;
  }

  addSkill(): void {
    this.skills.push(this.createSkillFormGroup());
  }

  removeSkill(index: number): void {
    this.skills.removeAt(index);
  }

  loadJobs(): void {
    this.jobService.getJobs().subscribe((jobs) => (this.jobs = jobs));
  }

  loadJob(id: string): void {
    this.jobService.getJob1(id).subscribe((job) => {
      if (job) this.jobForm.patchValue(job);
      this.skills.clear();

      if (job)
        job.skills.forEach((skill) => {
          this.skills.push(
            this.fb.group({ skill: [skill.skill, Validators.required] })
          );
        });
    });
  }

  saveJob(): void {
    const job: Job = this.jobForm.value;
    if (job.id) {
      this.jobService.updateJob(job.id, job);
    } else {
      this.jobService.addJob(job);
    }
    this.jobForm.reset();
  }

  deleteJob(id: string | undefined): void {
    if (id) this.jobService.deleteJob(id);
  }
  selectedJob: Job | undefined;
  selectItem(item: Job) {
    this.selectedJob = item;
    if (item.id) this.loadJob(item.id);
  }

  handleEvent(data: { value: string }) {
    console.log('Received value from child:', data.value);
    if (data.value) {
      this.deleteJob(data.value);
    }
  }
}
