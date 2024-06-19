import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import {
  loadJobs,
  loadJobsSuccess,
  loadJobsFailure,
  addJob,
  addJobSuccess,
  addJobFailure,
} from './job.actions';
import { Job } from './job.model';

@Injectable()
export class JobEffects {
  loadJobs$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadJobs),
      mergeMap(() =>
        this.firestore
          .collection<Job>('jobs')
          .valueChanges({ idField: 'id' })
          .pipe(
            map((jobs) => loadJobsSuccess({ jobs })),
            catchError((error) => of(loadJobsFailure({ error })))
          )
      )
    )
  );

  // addJob$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(addJob),
  //     mergeMap((action) =>
  //       this.firestore
  //         .collection('jobs')
  //         .add(action.job)
  //         .then(() => addJobSuccess({ job: action.job }))
  //         .catch((error) => of(addJobFailure({ error })))
  //     )
  //   )
  // );

  constructor(private actions$: Actions, private firestore: AngularFirestore) {}
}
