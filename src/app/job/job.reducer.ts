import { createReducer, on } from '@ngrx/store';
import { Job } from './job.model';
import { loadJobsSuccess, addJobSuccess } from './job.actions';

export interface JobState {
  jobs: Job[];
  error: any;
}

export const initialState: JobState = {
  jobs: [],
  error: null,
};

const _jobReducer = createReducer(
  initialState,
  on(loadJobsSuccess, (state, { jobs }) => ({ ...state, jobs })),
  on(addJobSuccess, (state, { job }) => ({
    ...state,
    jobs: [...state.jobs, job],
  }))
);

export function jobReducer(state: JobState, action: any) {
  return _jobReducer(state, action);
}
