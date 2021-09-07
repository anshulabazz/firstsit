import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';
@Component({
  selector: 'app-upcomingthird',
  templateUrl: './upcomingthird.component.html',
  styleUrls: ['./upcomingthird.component.css']
})
export class UpcomingthirdComponent implements OnInit {

  datacome3 = <any>{};
  constructor(public service: FirebaseService) { }

  ngOnInit() {
    this.service.get3().subscribe(data => {

      this.datacome3 = data.map(e => {
        return {


          id: e.payload.doc.id,
          title: e.payload.doc.data(),



        };

      })
     
    })
  }
  }


