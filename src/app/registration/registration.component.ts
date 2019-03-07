import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  confirmpassword : any;
  password : any;
  email: any;
  name : any;
  data :any =[];

  registration:any =[];

  constructor() {

   
this.data = localStorage.getItem("data");

this.registration.push(this.data)

    // localStorage.setItem('data', this.registration);

  }

  ngOnInit() {
  }

  register(){
    localStorage.setItem('data', this.registration);
  }
}
