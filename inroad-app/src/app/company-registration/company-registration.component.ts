import { Component, OnInit } from '@angular/core';
import { User } from '../shared/user';

@Component({
  selector: 'app-company-registration',
  templateUrl: './company-registration.component.html',
  styleUrls: ['./company-registration.component.css']
})
export class CompanyRegistrationComponent implements OnInit {

  constructor() { }

  userName = '';
  passWord = '';
  cname = '';
  grade = '';
  major = '';

  duplicated = false;
  isEmpty = false;

  remove = '';

  user = new User('', '');

  submitted = false;

  onSubmit() {
    if (this.userName == '') {
      this.isEmpty = true;
      return;
    }

    if (this.passWord == '') {
      this.isEmpty = true;
      return;
    }

    if (this.cname == '') {
      this.isEmpty = true;
      return;
    }

    if (this.grade == '') {
      this.isEmpty = true;
      return;
    }

    if (this.major == '') {
      this.isEmpty = true;
      return;
    }

    this.submitted = true;
    console.log(JSON.stringify(this.user)); // Here's the data in json
  }
  ngOnInit() {
  }

}
