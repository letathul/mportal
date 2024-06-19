import { Injectable } from '@angular/core';
import {
  Firestore,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
} from '@angular/fire/firestore';
import { collection, addDoc } from 'firebase/firestore';
import { Job } from '../../../job/job.model';

@Injectable({
  providedIn: 'root',
})
export class GetJobServiceService {
  async getJob(id: string): Promise<Job | undefined> {
    const docRef = doc(this.db, 'jobs', id);
    const docSnap = await getDoc(docRef);
    return docSnap.exists() ? { ...(docSnap.data() as Job) } : undefined;
  }

  async createJob1(job: Job): Promise<void> {
    await addDoc(collection(this.db, 'jobs'), job);
  }

  async updateJob(id: string, job: Job): Promise<void> {
    const docRef = doc(this.db, 'jobs', id);
    await setDoc(docRef, job, { merge: true });
  }

  constructor(private db: Firestore) {}

  async getAllJobs1(): Promise<Job[]> {
    const querySnapshot = await getDocs(query(collection(this.db, 'data')));
    return querySnapshot.docs.map((doc) => ({
      ...(doc.data() as Job),
    }));
  }

  async getAllJobs() {
    return (await getDocs(query(collection(this.db, 'data')))).docs.map(
      (jobs) => jobs.data()
    );
  }
  async createJob(job: Job) {
    const docRef = await addDoc(collection(this.db, 'data'), {
      job: job,
    });
    console.log('Document written with ID: ', docRef.id);
  }
}
