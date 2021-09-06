import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Local } from 'protractor/built/driverProviders';
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  islogin = false;

  constructor(public fireservices: AngularFirestore, public firebaseauth: AngularFireAuth  ) { }

  save(records: any) {
    return this.fireservices.collection('dream11').add(records);
  }
  save1(records: any) {
    return this.fireservices.collection('dream12').add(records);
  }
  save2(records: any) {
    return this.fireservices.collection('dream13').add(records);
  }
  save3(records: any) {
    return this.fireservices.collection('dream14').add(records);
  }
  async sigin(email: string, password: string) {
    await this.firebaseauth.signInWithEmailAndPassword(email, password).then(res => {
      this.islogin = true;
      localStorage.setItem('user', JSON.stringify(res.user))
    })
  }
  save4(records: any) {
    return this.fireservices.collection('dream15').add(records);
  }
  save5(records: any) {
    return this.fireservices.collection('dream16').add(records);
  }

  get() {
    return this.fireservices.collection('dream11').snapshotChanges();
  }
  get1() {
    return this.fireservices.collection('dream12').snapshotChanges();
  }
  get2() {
    return this.fireservices.collection('dream13').snapshotChanges();
  }
  get3() {
    return this.fireservices.collection('dream14').snapshotChanges();
  }
  get4() {
    return this.fireservices.collection('dream15').snapshotChanges();
  }
  get5() {
    return this.fireservices.collection('dream16').snapshotChanges();
  }

  update(recordid:any,records:any) {
    this.fireservices.doc('dream11/' + recordid).update(records);

  }
  update1(recordid: any, records: any) {
    this.fireservices.doc('dream12/' + recordid).update(records);

  }
  update2(recordid: any, records: any) {
    this.fireservices.doc('dream13/' + recordid).update(records);

  }

  update3(recordid: any, records: any) {
    this.fireservices.doc('dream14/' + recordid).update(records);

  }
  update4(recordid: any, records: any) {
    this.fireservices.doc('dream15/' + recordid).update(records);

  }
  update5(recordid: any, records: any) {
    this.fireservices.doc('dream16/' + recordid).update(records);

  }




  deletematches(dataid: any) {
    this.fireservices.doc('dream11/' + dataid).delete();


  }
  deletematches1(dataid1: any) {
    this.fireservices.doc('dream12/' + dataid1).delete();


  }
  deletematches2(dataid2: any) {
    this.fireservices.doc('dream13/' + dataid2).delete();


  }
  deletematches3(dataid3: any) {
    this.fireservices.doc('dream14/' + dataid3).delete();


  }
  deletematches4(dataid4: any) {
    this.fireservices.doc('dream15/' + dataid4).delete();


  }
  deletematches5(dataid5: any) {
    this.fireservices.doc('dream16/' + dataid5).delete();


  }
  
  sigup(email: string, password: string) {
     this.firebaseauth.createUserWithEmailAndPassword(email, password).then(res => {
      this.islogin = true;
      localStorage.setItem('user', JSON.stringify(res.user))
    })
  }
}

 
