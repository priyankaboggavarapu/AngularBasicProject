import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-profiledetails',
  templateUrl: './profiledetails.component.html',
  styleUrls: ['./profiledetails.component.css']
})
export class ProfiledetailsComponent implements OnInit {
  payload={
     email:"",
     password:""
  }
  profile: any;

  constructor(private service: CommonService) {
    this.getprofile()
  }

  getprofile() {
    let url = 'https://jsonplaceholder.typicode.com/users';
    this.service.getdata(url)
      .subscribe((data: any) => {
        console.log(data)
        this.profile=data;
      })

  }

  ngOnInit() {

  }

}
