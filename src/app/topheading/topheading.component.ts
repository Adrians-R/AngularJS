import { Component, OnInit } from '@angular/core';
import { NewsapiservicesService } from '../service/newsapiservices.service';

@Component({
  selector: 'app-topheading',
  templateUrl: './topheading.component.html',
  styleUrls: ['./topheading.component.css']
})
export class TopheadingComponent implements OnInit {

  constructor(private service:NewsapiservicesService) { }

  //display data
  topheadingDisplay:any = [1];

  ngOnInit(): void {

    this.service.topHeading().subscribe((result) => {
      this.topheadingDisplay = result.articles;
    });

  }

}
