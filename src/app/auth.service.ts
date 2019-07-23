import { AngularFireAuth } from "@angular/fire/auth";
import { Injectable } from "@angular/core";
import { auth } from "firebase/app";
import { Observable } from "rxjs";
import * as firebase from "firebase";
import { ActivatedRoute } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  user$: Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth, private route: ActivatedRoute) {
    this.user$ = afAuth.authState;
  }

  login() {
    let returnUrl = this.route.snapshot.queryParamMap.get("returnUrl") || "/";
    localStorage.setItem("returnUrl", returnUrl);
    this.afAuth.auth.signInWithRedirect(new auth.GoogleAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
  }
}
