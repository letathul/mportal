// src/app/job/job.actions.ts
import { createAction, props } from '@ngrx/store';
import { Job } from './job.model';

export const updateJob = createAction(
  '[Job] Update Job',
  props<{ job: Job }>()
);

export const deleteJob = createAction(
  '[Job] Delete Job',
  props<{ id: string }>()
);

export const loadJobs = createAction('[Job] Load Jobs');

export const loadJobsSuccess = createAction(
  '[Job] Load Jobs Success',
  props<{ jobs: Job[] }>()
);
export const loadJobsFailure = createAction(
  '[Job] Load Jobs Failure',
  props<{ error: any }>()
);

export const addJob = createAction('[Job] Add Job', props<{ job: Job }>());
export const addJobSuccess = createAction(
  '[Job] Add Job Success',
  props<{ job: Job }>()
);
export const addJobFailure = createAction(
  '[Job] Add Job Failure',
  props<{ error: any }>()
);
