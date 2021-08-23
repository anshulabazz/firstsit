import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from '../firebase.service';
@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.css']
})
export class AdditemComponent implements OnInit {
  datacome = <any>{};
  isedit!:boolean;
  constructor(public router: Router, public service: FirebaseService) { }

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
  }
  addmatch() {
    this.router.navigate(['add']);
  }
  updatematch(recordid:any,title:any,textarea:any) {
    let records = {
      title, textarea
    }
    this.service.update(recordid, records);
  }
  deletematch(dataid: any) {
    this.service.deletematches(dataid);

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

