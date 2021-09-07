import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  datacome = <any>{};
  constructor(public service: FirebaseService) { }

  ngOnInit() {
    this.service.get().subscribe(data => {

      this.datacome = data.map(e => {
        return {


          id: e.payload.doc.id,
          title: e.payload.doc.data(),



        };

      })
      
    })
  }

}
