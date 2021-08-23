import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FirebaseService } from '../firebase.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { map, finalize } from "rxjs/operators";
import { Observable } from "rxjs";
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  title!: any;
  textarea!: any;
  
  fb :any;
  downloadURL!: Observable<string>;

  constructor(public services: FirebaseService, public storage: AngularFireStorage) { }
  ngOnInit() { }

  submit(title: any, textarea: any) {
    let records = {
      title, textarea
    }
    this.services.save(records).then(res => {

    })
  }

  upload(event: any) {
    var n = Date.now();
    const file: File = event.target.files[0];
    const filepath = `images/$[n]`;
    const metadata = { 'contentType': file.type };
    const fileRef = this.storage.ref(filepath);
    fileRef.put(file, metadata);
    const task = this.storage.upload(filepath, file);
    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          this.downloadURL = fileRef.getDownloadURL();
          this.downloadURL.subscribe(url => {
            if (url) {
              this.fb = url;
            }
            console.log(this.fb);
          });
        })
      )
      .subscribe(url => {
        if (url) {
          console.log(url);
        }
      });
  }
  
  submitimg(image: any) {

  }



}
