import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from '../firebase.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  datacome = <any>{};
  datacome1 = <any>{};
  datacome2 = <any>{};
  datacome3 = <any>{};
  datacome4 = <any>{};
  datacome5 = <any>{};
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
  match() {
    this.router.navigate(['match-upcoming']);
  }
  match1() {
    this.router.navigate(['upcoming-first']);
  }
  match2() {
    this.router.navigate(['upcoming-sec-match']);
  }
  match3() {
    this.router.navigate(['upcoming-third-match']);
  }
  match4() {
    this.router.navigate(['upcoming-fourth-match']);
  }
  match5() {
    
      this.router.navigate(['upcoming-fifth-match']);
    
  }
}
