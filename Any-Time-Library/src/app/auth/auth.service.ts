import { Injectable } from "@angular/core";
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { reject } from 'q';
import { User } from '../shared/models/user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { forkJoin, Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class AuthService {

  baseUrl: string = "http://localhost:3000";

  constructor(
    public afAuth: AngularFireAuth,
    private client: HttpClient
  ) { }

  async doGoogleLogin() {
    let newUser: User;
    let provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');
    let result = <firebase.auth.UserCredential>await this.afAuth.auth
      .signInWithPopup(provider).catch(err => console.log(err));

    // if (result) {
    //   newUser.email = result.user.email;
    //   newUser.userName = result.user.displayName;
    //   newUser.password = "",
    //   newUser.isActive = true,
    //   newUser.role = "user"
    // }

    console.log(newUser.email + " " + newUser.userName);

    return result;
  }

  addUser(user: User): Observable<User[]> {
    return forkJoin(
      this.client.post<User>(this.baseUrl + '/users', user, httpOptions)
    );
  }
  // return new Promise<any>((resolve, reject) => {
  //   let provider = new firebase.auth.GoogleAuthProvider()
  //   provider.addScope('profile');
  //   provider.addScope('email');
  //   this.afAuth.auth
  //   .signInWithPopup(provider)
  //   .then(res => {
  //     resolve(res);
  //   }, err => {
  //     console.log(err);
  //     reject(err);
  //   })
  // })

  doRegister(value: User) {
    firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
      .then(data => {

      }).catch(err => {
        reject(err)
      });

  }

  doLogin(value: User) {
    firebase.auth().signInWithEmailAndPassword(value.email, value.password)
      .then(data => {
        data.user.email
      }).catch(err => {
        reject(err)
      })
  }

  doLogout() {
    if (firebase.auth().currentUser) {
      this.afAuth.auth.signOut();
    }
    else {
      reject();
    }
  }

}
