import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

/**
 * Component to display the header of page.
 */
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  login() {
   this.router.navigate(['auth']);
  }

}
