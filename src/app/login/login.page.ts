import { Component, Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import * as firebase from 'firebase/auth';
import { ToastController } from '@ionic/angular';
import {ActivatedRoute, Router} from '@angular/router';
import {FirebaseService} from '../../services/firebase/firebase.service';


@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})

//const auth = firebase.getAuth();
export class LoginPage {
  sendEmailVerification: any;
  segment = 'Log-in';
  firebaseLogin: any;
  auth: any;
  dataExample: {[id: string]: string}= {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    name: '',
    town: '',
    phoneNumber: ''
  };

  constructor(
    public toastController: ToastController,
    private router: Router, private route: ActivatedRoute,
    private firebaseSrv: FirebaseService
  ) {
    //this.firebaseSrv.setSimpleCollectionByPath('News', this.dataExample);
    //console.log(this.firebaseSrv.getDataByPath('test'));
  }

  register(email, password) {
    this.presentToastWhenSignIn(email, password);
  }

  login(email, password) {
    this.auth = firebase.getAuth();
    this.firebaseLogin = firebase
      .signInWithEmailAndPassword(this.auth, email.value, password.value)
      .then((res) => {
        if (this.auth.currentUser.emailVerified) {
          this.router.navigate([`/dashboard-tab`]);
          console.log('logged in');
        } else {
          console.log(this.auth);
          this.presentToastWhenLogIn();
          return false;
        }
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }
  // deux pop-up pour l'envoie de courriel lorsque cree et logger
  async presentToastWhenLogIn() {
    const toast = await this.toastController.create({
      header: 'Compte non vérifié',
      message: 'Voulez-vous recevoir un email de confirmation?',
      icon: 'mail',
      position: 'bottom',
      buttons: [
        {
          text: 'Oui',
          role: 'confirm',
          handler: () => {
            this.sendEmailVerification = firebase
              .sendEmailVerification(firebase.getAuth().currentUser)
              .then((res) => {
                window.alert(
                  'Un message à été envoyé à votre courriel correspondant'
                );
              })
              .catch((error) => {
                window.alert(error.message);
              });
            console.log('Favorite clicked');
          },
        },
        {
          text: 'Non',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          },
        },
      ],
    });
    await toast.present();

    const { role } = await toast.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  async presentToastWhenSignIn(email, password) {
    const toast = await this.toastController.create({
      header: 'Création de compte',
      message:
        'Voulez vous vraiment crée cotre compte? Un courriel de confirmation sera automatiquement envoyé',
      icon: 'email',
      position: 'bottom',
      buttons: [
        {
          text: 'Oui',
          role: 'confirm',
          handler: () => {
            this.auth = firebase.getAuth();
            this.firebaseLogin = firebase
              .createUserWithEmailAndPassword(
                this.auth,
                email.value,
                password.value
              )
              .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log(user);

                this.sendEmailVerification = firebase
                  .sendEmailVerification(firebase.getAuth().currentUser)
                  .then((res) => {
                    window.alert(
                      'Confirmation de l\'envoie du courriel'
                    );
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
          },
        },
        {
          text: 'Non',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          },
        },
      ],
    });
    await toast.present();

    const { role } = await toast.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
}
