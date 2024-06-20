import { Injectable } from '@angular/core';
import {
  Firestore,
  collectionData,
  deleteDoc,
  doc,
  docData,
  getDoc,
  getDocs,
  query,
  setDoc,
} from '@angular/fire/firestore';
import { collection, addDoc } from 'firebase/firestore';
import { Job } from '../../../job/job.model';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class GetJobServiceService {
  // private jobsCollection = this.firestore.collection<Job>('jobs');
  private jobsCollection = collection(this.db, 'data');

  async getJob(id: string): Promise<Job | undefined> {
    const docRef = doc(this.db, 'data', id);
    const docSnap = await getDoc(docRef);
    return docSnap.exists() ? { ...(docSnap.data() as Job) } : undefined;
  }

  async createJob1(job: Job): Promise<void> {
    await addDoc(collection(this.db, 'data'), job);
  }

  async updateJob(id: string, job: Job): Promise<void> {
    const docRef = doc(this.db, 'data', id);
    await setDoc(docRef, job, { merge: true });
  }

  constructor(private db: Firestore) {}

  async getAllJobs1(): Promise<Job[]> {
    const querySnapshot = await getDocs(query(collection(this.db, 'data')));
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...(doc.data() as Job),
    }));
  }

  async getAllJobs2(): Promise<any> {
    const querySnapshot = await getDocs(query(collection(this.db, 'data')));
    return querySnapshot.docs.map((doc) => ({
      ...doc.data(),
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
  //==========
  getJobs(): Observable<Job[]> {
    return collectionData(this.jobsCollection, { idField: 'id' }) as Observable<
      Job[]
    >;
  }

  getJob1(id: string): Observable<Job> {
    const jobDoc = doc(this.jobsCollection, id);
    return docData(jobDoc, { idField: 'id' }) as Observable<Job>;
  }

  addJob(job: Job): Promise<void> {
    const newDocRef = doc(this.jobsCollection);
    return setDoc(newDocRef, { ...job, id: newDocRef.id });
  }

  updateJob1(id: string, job: Job): Promise<void> {
    const jobDoc = doc(this.jobsCollection, id);
    return setDoc(jobDoc, job);
  }

  deleteJob(id: string): Promise<void> {
    const jobDoc = doc(this.jobsCollection, id);
    return deleteDoc(jobDoc);
  }
}
