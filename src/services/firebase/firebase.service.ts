import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as firebaseAuth from 'firebase/auth';
import { getFirestore, collection, addDoc, getDocs } from 'firebase/firestore';

const db = getFirestore();

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  sendEmailVerification: any;
  sendPasswordReset: any;
  firebaseLogin: any;
  auth: any;
  isAuth: any;
  aFirestore: any;

  constructor(private router: Router, private route: ActivatedRoute) {}

  signInUser(email, password) {
    this.auth = firebaseAuth.getAuth();
    this.firebaseLogin = firebaseAuth
      .createUserWithEmailAndPassword(this.auth, email.value, password.value)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);

        this.sendEmailVerification = firebaseAuth
          .sendEmailVerification(firebaseAuth.getAuth().currentUser)
          .then((res) => {
            window.alert('Confirmation de l\'envoie du courriel');
          })
          .catch((error) => {
            window.alert(error.message);
          });

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  }
  loginUser(email, password) {
    this.auth = firebaseAuth.getAuth();
    this.firebaseLogin = firebaseAuth
      .signInWithEmailAndPassword(this.auth, email.value, password.value)
      .then((res) => {
        if (this.auth.currentUser.emailVerified) {
          this.router.navigate([`/dashboard-tab`]);
          console.log('logged in');
        } else {
          console.log(this.auth);
          //this.presentToastWhenLogIn();
          return false;
        }
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }
  userAuthInfo() {
    this.isAuth = firebaseAuth.getAuth().currentUser;
    return this.isAuth;
  }
  sendEmailConfirmation() {
    this.sendEmailVerification = firebaseAuth
      .sendEmailVerification(firebaseAuth.getAuth().currentUser)
      .then((res) => {
        window.alert('Un message à été envoyé à votre courriel correspondant');
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }
  sendEmailRecovery(email) {
    this.sendPasswordReset = firebaseAuth
      .sendPasswordResetEmail(firebaseAuth.getAuth(), email)
      .then((res) => {
        window.alert('Un message à été envoyé à votre courriel correspondant');
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }

  async getCollectionByPath(path) {
    const querySnapshot = await getDocs(collection(db, path));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
    });
  }
  async setSimpleCollectionByPath(path, data) {
    try {
      const docRef = await addDoc(collection(db, path), {
        data
      });
      console.log('Document written with ID: ', docRef.id);
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  }
  deleteSimpleCollectionByPath(){
  }
  updateSimpleCollectionByPath(){
  }
}
