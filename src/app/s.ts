import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(public fireservices: AngularFirestore) { }

  save(records: any) {
    return this.fireservices.collection('dream11').add(records);
  }

  get() {
    return this.fireservices.collection('dream11').snapshotChanges();
  }
  update() {
    this.fireservices

  }
  deletematches(dataid: any,data:any) {
    this.fireservices.doc('dream11/' + data).delete();

  }
}

 
