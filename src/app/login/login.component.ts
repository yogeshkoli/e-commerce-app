import { AngularFireAuth } from '@angular/fire/auth';
import { Component, OnInit } from '@angular/core';

import {auth} from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(public afAuth: AngularFireAuth) {

  }

  ngOnInit() {}

  login() {
    this.afAuth.auth.signInWithRedirect(new auth.GoogleAuthProvider());
  }
}
