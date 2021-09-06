import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from '../firebase.service';
import { FirebaseauthserviceService } from '../firebaseauthservice.service';
@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.css']
})
export class AdditemComponent implements OnInit {
  datacome = <any>{};
  datacome1 = <any>{};
  datacome2 = <any>{};
  datacome3 = <any>{};
  datacome4 = <any>{};
  datacome5 = <any>{};
  isedit!: boolean;
  
  @Output() islogout = new EventEmitter<void>();
  @Output() isadd = new EventEmitter<void>();
  constructor(public router: Router, public service: FirebaseService, public services: FirebaseauthserviceService) { }

  ngOnInit() {
    this.service.get().subscribe(data => {

      this.datacome = data.map(e => {
        return {

          isedit: false,
          id: e.payload.doc.id,
          title: e.payload.doc.data(),



        };

      })
     
    })
    this.service.get1().subscribe(data => {

      this.datacome1 = data.map(e => {
        return {

          isedit: false,
          id: e.payload.doc.id,
          title: e.payload.doc.data(),



        };

      })
    })
    this.service.get2().subscribe(data => {

      this.datacome2 = data.map(e => {
        return {

          isedit: false,
          id: e.payload.doc.id,
          title: e.payload.doc.data(),



        };

      })

    })
    this.service.get3().subscribe(data => {

      this.datacome3 = data.map(e => {
        return {

          isedit: false,
          id: e.payload.doc.id,
          title: e.payload.doc.data(),



        };

      })

    })
    this.service.get4().subscribe(data => {

      this.datacome4 = data.map(e => {
        return {

          isedit: false,
          id: e.payload.doc.id,
          title: e.payload.doc.data(),



        };

      })

    })
    this.service.get5().subscribe(data => {

      this.datacome5 = data.map(e => {
        return {

          isedit: false,
          id: e.payload.doc.id,
          title: e.payload.doc.data(),



        };

      })

    })

  }
  addmatch() {
    this.isadd.emit()
   /* this.router.navigate(['add']);*/
  }
  updatematch(recordid:any,title:any) {
    let records = {
      title
    }
    this.service.update(recordid, records);
  }
  updatematch1(recordid: any, title: any) {
    let records = {
      title
    }
    this.service.update1(recordid, records);
  }
  updatematch2(recordid: any, title: any) {
    let records = {
      title
    }
    this.service.update2(recordid, records);
  }
  updatematch3(recordid: any, title: any) {
    let records = {
      title
    }
    this.service.update3(recordid, records);
  }
  updatematch4(recordid: any, title: any) {
    let records = {
      title
    }
    this.service.update4(recordid, records);
  }
  updatematch5(recordid: any, title: any) {
    let records = {
      title
    }
    this.service.update5(recordid, records);
  }


  deletematch(dataid: any) {
    this.service.deletematches(dataid);

  }
  deletematch1(dataid1: any) {
    this.service.deletematches1(dataid1);

  }
  deletematch2(dataid2: any) {
    this.service.deletematches2(dataid2);

  }
  deletematch3(dataid3: any) {
    this.service.deletematches3(dataid3);

  }
  deletematch4(dataid4: any) {
    this.service.deletematches4(dataid4);

  }
  deletematch5(dataid5: any) {
    this.service.deletematches5(dataid5);

  }
  logout() {
    this.services.logout()
    this.islogout.emit()

  }

  
}
/*import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FirebaseService } from '../firebase.service';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  title!: any;
  textarea!: any;

  constructor(public services: FirebaseService) { }
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
<form>
  <div class="form-group">
    <label for="inputAddress2">Title</label>
    <input type="text" class="form-control" id="title" #title placeholder="title">
  </div>
  <div class="form-group">
    <label for="exampleFormControlTextarea1">Textarea</label>
    <textarea class="form-control" id="textarea" #textarea rows="5"></textarea>
  </div>
  <div class="form-group">
    <label for="exampleFormControlFile1">file input</label>
    <input type="file" (change)="upload($event)" accept="*.png.jpg" class="form-control-file" #image id="File">
  </div>

</form>
<button style="background-color:antiquewhite" mat-raised-button (click)="submit(title.value,textarea.value)">Published</button>
<button style="background-color:antiquewhite" mat-raised-button (click)="submitimg(image.value)">Image published</button>

<img src="https://firebasestorage.googleapis.com/v0/b/dream11-3d9fe.appspot.com/o/2015234mm%2C..rH7UFbvE.jpg?alt=media&token=e5aff58f-7623-4269-b47c-2c28275d7902" />



*/

