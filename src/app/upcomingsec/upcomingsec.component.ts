import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';
@Component({
  selector: 'app-upcomingsec',
  templateUrl: './upcomingsec.component.html',
  styleUrls: ['./upcomingsec.component.css']
})
export class UpcomingsecComponent implements OnInit {

  datacome2 = <any>{};
  constructor(public service: FirebaseService) { }

  ngOnInit() {
    this.service.get2().subscribe(data => {

      this.datacome2 = data.map(e => {
        return {


          id: e.payload.doc.id,
          title: e.payload.doc.data(),



        };

      })
     
    })
  }
  }


