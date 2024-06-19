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
  selectedJob: Job | undefined;
  jobs: Job[] | undefined;

  jobForm: FormGroup;
  jobId: string | null = null;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    protected jobService: GetJobServiceService,
    private sampledate: SamlpeDataService,
    private jobsserv: GetJobServiceService
  ) {
    this.jobForm = this.fb.group({
      title: ['', Validators.required],
      companyName: ['', Validators.required],
      location: ['', Validators.required],
      workType: ['', Validators.required],
      jobType: ['', Validators.required],
      jobCategory: this.fb.group({
        id: ['', Validators.required],
        name: ['', Validators.required],
      }),
      educationQualification: ['', Validators.required],
      jobDescription: ['', Validators.required],
      payScale: ['', Validators.required],
      skills: this.fb.array([], Validators.required),
    });
  }

  async loadJob(): Promise<void> {
    if (this.jobId) {
      const job = await this.jobService.getJob(this.jobId);
      if (job) {
        this.jobForm.patchValue(job);
      }
    }
  }

  async onSubmit(): Promise<void> {
    if (this.jobForm.valid) {
      const job: Job = this.jobForm.value;
      if (this.jobId) {
        await this.jobService.updateJob(this.jobId, job);
      } else {
        await this.jobService.createJob(job);
      }
      this.router.navigate(['/jobs']); // Adjust the route as needed
    }
  }

  async ngOnInit(): Promise<void> {
    this.jobs = this.sampledate.sampledata;

    ///this.jobs = await this.jobsserv.getAllJobs1();

    this.selectedJob = this.jobs.at(0);

    this.jobId = this.route.snapshot.paramMap.get('id');
    if (this.jobId) {
      this.loadJob();
    }
  }
  addSkill(): void {
    (this.jobForm.get('skills') as FormArray).push(
      new FormControl('', Validators.required)
    );
  }

  removeSkill(index: number): void {
    (this.jobForm.get('skills') as FormArray).removeAt(index);
  }
  selectItem(item: Job) {
    console.log(item);
    this.jobId = item.id;
    this.selectedJob = item;
  }
}
