import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap'
import { NgForm } from '@angular/forms';
import { AlertService } from '../alert/alert.service';

interface User {
  uid: string;
  email: string;
  photoUrl?: string;
  displayName?: string;
}

interface XenosCredentials {
  email: string;
  password: string;
}

@Injectable()
export class AuthService {

  user: Observable<User>;

  constructor(private afAuth: AngularFireAuth, private afs: AngularFirestore, private router: Router, private alertService: AlertService) { 

      // Get Auth data, then get firestore document || null
      this.user = this.afAuth.authState.switchMap(user => {
        if(user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges()
        }
        else
          return Observable.of(null)
      })

  }

  register(form: NgForm) {
    
    let creds : XenosCredentials = {
      email: form.control.get('email').value,
      password: form.control.get('password').value
    }

    this.createUser(creds);
  }

  login(form: NgForm) {
    let creds : XenosCredentials = {
      email: form.control.get('email').value,
      password: form.control.get('password').value
    }

    this.loginUser(creds);
  }

  googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.oAuthLogin(provider);
  }

  signOut() {
    this.afAuth.auth.signOut().then(
      () => {
        this.router.navigate(['/login']);
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
      displayName: user.displayName
    }

    return userRef.set(data);
  }

  private createUser(creds : XenosCredentials) {

    this.afAuth.auth.createUserWithEmailAndPassword(creds.email, creds.password)
      .then(
        (credential) => {
          this.updateUserData(credential);
          this.alertService.info('Successfully created your account.', 5000, true);
          this.router.navigate(['dashboard']);
        }
      ).catch(
        (error) => {
          this.alertService.error(error.message, 5000);
        }
      )
  }

  private loginUser(creds: XenosCredentials) {
    this.afAuth.auth.signInWithEmailAndPassword(creds.email, creds.password)
      .then(
        (resp) => {
          this.alertService.info('Successfully Logged In', 5000, true);
          this.router.navigate(['dashboard']);
        }
      )
      .catch(
        (error) => {
          this.alertService.error(error.message, 5000);
        }
      )
    
  }

}
