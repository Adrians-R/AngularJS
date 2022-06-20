import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor(private http:HttpClient) {  }

  //newsApiUrl
  newsApiUrl = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=30f3ac5a6643416caf95ae76e5e00c5d";
  //techApiUrl
  techApiUrl = "https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=30f3ac5a6643416caf95ae76e5e00c5d";
  //busnessnews
  businessApiUrl = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=30f3ac5a6643416caf95ae76e5e00c5d";
  //topHeading()
  topHeading():Observable<any>
  {
    return this.http.get(this.newsApiUrl);//
  }
  //TechNews()
  techNews():Observable<any>
  {
    return this.http.get(this.techApiUrl);//
  }
  //TechNews()
  businesshNews():Observable<any>
  {
    return this.http.get(this.businessApiUrl);//
  }

}
