import { Injectable } from '@angular/core';
// import { Http, Headers, RequestOptions } from '@angular/http';
// import { Observable, Subject } from 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
//import 'rxjs/add/operator/map';
@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http :HttpClient) { 

  }
  getdata(url){
    return this.http.get(url)
  }
}
