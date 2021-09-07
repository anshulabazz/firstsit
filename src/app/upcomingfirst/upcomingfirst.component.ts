import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';
@Component({
  selector: 'app-upcomingfirst',
  templateUrl: './upcomingfirst.component.html',
  styleUrls: ['./upcomingfirst.component.css']
})
export class UpcomingfirstComponent implements OnInit {
  datacome1 = <any>{};
  constructor(public service: FirebaseService) { }
  ngOnInit() {
    this.service.get1().subscribe(data => {

      this.datacome1 = data.map(e => {
        return {


          id: e.payload.doc.id,
          title: e.payload.doc.data(),



        };

      })
     
    })
  }

  }


