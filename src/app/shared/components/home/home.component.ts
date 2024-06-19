import { Component } from '@angular/core';
import { Job } from '../../../job/job.model';
import { SamlpeDataService } from '../../service/samlpe-data.service';
import { JboxitemComponent } from '../../jboxitem/jboxitem.component';
import { CamelPipe } from '../../pipe/camel.pipe';
import { CommonModule } from '@angular/common';
import { GetJobServiceService } from '../../service/job/get-job-service.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [JboxitemComponent, CamelPipe, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  title = 'mportal';
  jobs: Job[] | undefined;

  selectedJob: Job | undefined;

  constructor(
    private sampledate: SamlpeDataService,
    private jobsserv: GetJobServiceService
  ) {}

  async ngOnInit(): Promise<void> {
    //this.jobs = this.sampledate.sampledata;

    this.jobs = await this.jobsserv.getAllJobs1();

    this.selectedJob = this.jobs.at(0);
  }

  selectItem(item: Job) {
    this.selectedJob = item;
    console.log(item);
  }
}
