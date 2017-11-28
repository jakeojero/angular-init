import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap'

interface User {
  uid: string;
  email: string;
  photoUrl?: string;
  displayName?: string;
}

@Injectable()
export class AuthService {

  user: Observable<User>;

  constructor(private afAuth: AngularFireAuth, private afs: AngularFirestore, private router: Router) { 

      // Get Auth data, then get firestore document || null
      this.user = this.afAuth.authState.switchMap(user => {
        if(user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges()
        }
        else
          return Observable.of(null)
      })

  }

  googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.oAuthLogin(provider);
  }

  signOut() {
    this.afAuth.auth.signOut().then(
      () => {
        this.router.navigate(['/']);
      }
    )
  }

  private oAuthLogin(provider) {
    return this.afAuth.auth.signInWithPopup(provider).then(
      (credential) => {
        this.updateUserData(credential.user)
      }
    )
  }

  private updateUserData(user) {
    //Sets user data to firestore on login
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);

    const data: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoUrl: user.photoUrl
    }

    return userRef.set(data);
  }



}
