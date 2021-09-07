import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';
@Component({
  selector: 'app-upcomingfifth',
  templateUrl: './upcomingfifth.component.html',
  styleUrls: ['./upcomingfifth.component.css']
})
export class UpcomingfifthComponent implements OnInit {
  datacome5 = <any>{};
  constructor(public service: FirebaseService) { }

 

  ngOnInit() {
    this.service.get5().subscribe(data => {

      this.datacome5 = data.map(e => {
        return {


          id: e.payload.doc.id,
          title: e.payload.doc.data(),



        };

      })
     
    })
  }

  }


