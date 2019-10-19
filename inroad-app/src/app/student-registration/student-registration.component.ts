import { Component, OnInit } from '@angular/core';
import { User } from '../shared/user';

@Component({
  selector: 'app-student-registration',
  templateUrl: './student-registration.component.html',
  styleUrls: ['./student-registration.component.css']
})
export class StudentRegistrationComponent implements OnInit {

  constructor() { }

  userName = '';
  passWord = '';
  fname = '';
  lname = '';
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
    if (this.fname == '') {
      this.isEmpty = true;
      return;
    }
    if (this.lname == '') {
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
