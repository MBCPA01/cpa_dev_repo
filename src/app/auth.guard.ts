import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import * as firebase from 'firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  user: any;
  loggin = false;

  constructor(private router: Router) {}

  canActivate(): boolean {
    const auth = firebase.getAuth();
    firebase.onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        console.log(user);
        this.loggin = true;
        this.router.navigate(['dashboard-tab']);
        // ...
      } else {
        // User is signed out
        this.loggin = false;
        this.router.navigate(['/']);
        // ...
      }
    });
    return this.loggin;
  }
}
