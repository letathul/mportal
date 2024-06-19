import { Injectable, inject } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  Auth,
  User,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  user,
} from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private auth: Auth) {
    console.log('AuthService constructor');
  }

  signIn(email: string, password: string): Promise<any> {
    return signInWithEmailAndPassword(this.auth, email, password);
  }
  //   // return this.afAuth
  //   //   .signInWithEmailAndPassword(email, password)
  //   //   .then((userCredential) => {
  //   //     return userCredential.user?.getIdToken().then((token) => {
  //   //       localStorage.setItem('authToken', token);
  //   //       return userCredential;
  //   //     });
  //   //   });
  // }

  // signOut(): Promise<void> {
  //   localStorage.removeItem('authToken');
  //   return this.afAuth.signOut();
  // }

  // isLoggedIn(): boolean {
  //   return !!localStorage.getItem('authToken');
  // }

  // async isLog(): Promise<boolean> {
  //   const user = await this.afAuth.currentUser;
  //   // coerce to boolean
  //   const isLoggedIn = !!user;
  //   return isLoggedIn;
  // }

  isLoggedIn(): boolean {
    console.log(this.auth.currentUser?.email);
    return this.auth.currentUser != null;
  }

  getAuthState() {
    return this.auth;
  }

  async signOut() {
    await this.auth.signOut();
  }
}
