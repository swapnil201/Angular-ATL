import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Any-Time-Library';

  ngOnInit() {
    firebase.initializeApp(environment.firebase);
  }
}
