import { Component, OnInit } from '@angular/core';
import { NewsapiservicesService } from '../service/newsapiservices.service';

@Component({
  selector: 'app-businessnews',
  templateUrl: './businessnews.component.html',
  styleUrls: ['./businessnews.component.css']
})
export class BusinessnewsComponent implements OnInit {

  constructor(private service: NewsapiservicesService) { }

  businessDisplay:any = [];
  ngOnInit(): void {
    this.service.businesshNews().subscribe((result) =>{
      this.businessDisplay = result.articles;
    })
}

}
