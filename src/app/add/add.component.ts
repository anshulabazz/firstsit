import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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
  @Output() isaddi = new EventEmitter<void>();
  title!: any;
  textarea!: any;
  image1!: any;
  playerplaying1!: any;
  playerplaying2!: any;
  toppick!: any;
  captainandvice!: any;
  team1!: any;
  team2: any;
  weather!: any;
  pitch!: any;
  finaladvice!: any;
  image2!: any;
  image3!: any;
  fb: any;
  fb1: any;
  fb2: any;
  downloadURL!: Observable<string>;

  constructor(public services: FirebaseService, public storage: AngularFireStorage) { }
  ngOnInit() { }

  submit(image1:any,title: any, textarea: any,weather:any,pitch:any,playerplaying1:any,playerplaying2:any, toppick: any,captainandvice:any,team1:any,team2:any,finaladvice:any,image2:any,image3:any) {
    let records = {
      image1, title, textarea, weather, pitch, playerplaying1, playerplaying2, toppick, captainandvice,team1,team2,finaladvice,image2,image3

    }
    this.services.save(records).then(res => {

    })
  }
  submit2(image1: any, title: any, textarea: any, weather: any, pitch: any, playerplaying1: any, playerplaying2: any, toppick: any, captainandvice: any, team1: any, team2: any, finaladvice: any, image2: any, image3: any) {
    let records = {
      image1, title, textarea, weather, pitch, playerplaying1, playerplaying2, toppick, captainandvice, team1, team2, finaladvice, image2, image3

    }
    this.services.save1(records).then(res => {

    })
  }
  submit3(image1: any, title: any, textarea: any, weather: any, pitch: any, playerplaying1: any, playerplaying2: any, toppick: any, captainandvice: any, team1: any, team2: any, finaladvice: any, image2: any, image3: any) {
    let records = {
      image1, title, textarea, weather, pitch, playerplaying1, playerplaying2, toppick, captainandvice, team1, team2, finaladvice, image2, image3

    }
    this.services.save2(records).then(res => {

    })
  }
  submit4(image1: any, title: any, textarea: any, weather: any, pitch: any, playerplaying1: any, playerplaying2: any, toppick: any, captainandvice: any, team1: any, team2: any, finaladvice: any, image2: any, image3: any) {
    let records = {
      image1, title, textarea, weather, pitch, playerplaying1, playerplaying2, toppick, captainandvice, team1, team2, finaladvice, image2, image3

    }
    this.services.save3(records).then(res => {

    })
  }
  submit5(image1: any, title: any, textarea: any, weather: any, pitch: any, playerplaying1: any, playerplaying2: any, toppick: any, captainandvice: any, team1: any, team2: any, finaladvice: any, image2: any, image3: any) {
    let records = {
      image1, title, textarea, weather, pitch, playerplaying1, playerplaying2, toppick, captainandvice, team1, team2, finaladvice, image2, image3

    }
    this.services.save4(records).then(res => {

    })
  }
  submit6(image1: any, title: any, textarea: any, weather: any, pitch: any, playerplaying1: any, playerplaying2: any, toppick: any, captainandvice: any, team1: any, team2: any, finaladvice: any, image2: any, image3: any) {
    let records = {
      image1, title, textarea, weather, pitch, playerplaying1, playerplaying2, toppick, captainandvice, team1, team2, finaladvice, image2, image3

    }
    this.services.save5(records).then(res => {

    })
  }

  upload(event: any) {
    var n = Date.now();
    const file: File = event.target.files[0];
    const filepath = file.name;
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
           
          });
        })
      )
      .subscribe(url => {
        if (url) {
        
        }
      });
  }
  upload1(event: any) {
    var n = Date.now();
    const file1: File = event.target.files[0];
    const filepath1 = file1.name;
    const metadata1 = { 'contentType': file1.type };
    const fileRef1 = this.storage.ref(filepath1);
    fileRef1.put(file1, metadata1);
    const task = this.storage.upload(filepath1, file1);
    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          this.downloadURL = fileRef1.getDownloadURL();
          this.downloadURL.subscribe(url => {
            if (url) {
              this.fb1 = url;
            }
           
          });
        })
      )
      .subscribe(url => {
        if (url) {
         
        }
      });
  }
  upload2(event: any) {
    var n = Date.now();
    const file2: File = event.target.files[0];
    const filepath2 = file2.name;
    const metadata2 = { 'contentType': file2.type };
    const fileRef2 = this.storage.ref(filepath2);
    fileRef2.put(file2, metadata2);
    const task = this.storage.upload(filepath2, file2);
    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          this.downloadURL = fileRef2.getDownloadURL();
          this.downloadURL.subscribe(url => {
            if (url) {
              this.fb2 = url;
            }
           
          });
        })
      )
      .subscribe(url => {
        if (url) {
          
        }
      });

  }
  
  submitimg(image: any) {

  }

  off() {
    this.isaddi.emit()
  }

}
