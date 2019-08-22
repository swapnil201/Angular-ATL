import { Component, OnInit } from '@angular/core';

/** Component to display first page to the User. 
 * Gives option to browse and return books.
 * Shows most borrowed books (Top Books).
*/
@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {

  value:string = "clear";

  constructor() { }

  ngOnInit() {
  }

}
