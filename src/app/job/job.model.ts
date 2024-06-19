// src/app/job/job.model.ts
export interface Job {
  id: string;
  title: string;
  companyName: string;
  location: string;
  workType: string;
  jobType: string;
  jobCategory: JobCategory;
  educationQualification: string;
  jobDescription: string;
  payScale: string;
  skills: string[];
}

export interface JobCategory {
  id: string;
  name: string;
}

export interface Mportal {
  loading: boolean;
  jobs: Job[];
}

export const initialState: Mportal = { loading: true, jobs: [] };
