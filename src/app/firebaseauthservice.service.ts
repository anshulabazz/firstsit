import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
@Injectable({
  providedIn: 'root'
})
export class FirebaseauthserviceService {
  islogin = false;
  constructor(public firebaseauth: AngularFireAuth) { }



  async sigin(email: string, password: string) {
    await this.firebaseauth.signInWithEmailAndPassword(email, password).then(res => {
      this.islogin = true;
      localStorage.setItem('user', JSON.stringify(res.user))
    })
  }
  async sigup(email: string, password: string) {
     await this.firebaseauth.createUserWithEmailAndPassword(email, password).then(res => {
      this.islogin = true;
      localStorage.setItem('user', JSON.stringify(res.user))
    })
  }
  logout() {
    this.firebaseauth.signOut()
    localStorage.removeItem('user')
  }
}
