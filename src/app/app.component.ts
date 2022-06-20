import { Component } from '@angular/core';
import {faArrowUp, faUser } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'news-website';
  faArrowUp = faArrowUp;
  faUser = faUser;

}
