import { createJob } from './job.actions';
import { Job } from './job.model';

export const FeatureKey = 'JOB_STATE';
export const selectCryptoState = createJobSelector<Job>(FeatureKey);
export const getPriceSelector = createSelector(
  selectCryptoState,
  (state) => state
);
