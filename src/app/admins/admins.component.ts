import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
@Component({
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.css']
})
export class AdminsComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }
  onclick() {
    this.router.navigate(['additems']);
  }
}
