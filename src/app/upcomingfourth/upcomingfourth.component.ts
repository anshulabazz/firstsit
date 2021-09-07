import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';
@Component({
  selector: 'app-upcomingfourth',
  templateUrl: './upcomingfourth.component.html',
  styleUrls: ['./upcomingfourth.component.css']
})
export class UpcomingfourthComponent implements OnInit {

  datacome4 = <any>{};
  constructor(public service: FirebaseService) { }

  ngOnInit() {
    this.service.get4().subscribe(data => {

      this.datacome4 = data.map(e => {
        return {


          id: e.payload.doc.id,
          title: e.payload.doc.data(),



        };

      })
     
    })
  }
  }


