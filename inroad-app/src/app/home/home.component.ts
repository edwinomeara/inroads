import { Component, OnInit } from '@angular/core';
import { User } from '../shared/user';

//var Sqlite = require('angular-sqlite');

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor() {}

  userName = '';
  passWord = '';

  bill = false;

  duplicated = false;
  isEmpty = false;

  remove = '';

  user = new User('', '');

  checkIfBill() {
    if (this.user.userName == 'bill') {
      this.bill = true;
    }
  }

  onSubmit() {
    if (this.user.userName == 'bill') {
      this.bill = true;
    }

    if (this.bill) {
      this.router.navigate(['/blog']);
    }

    console.log(this.user.userName);

    console.log(this.bill);

    if (this.userName == '') {
      this.isEmpty = true;
      return;
    }

    if (this.passWord == '') {
      this.isEmpty = true;
      return;
    }

    console.log(JSON.stringify(this.user)); // Here's the data in json
  }

  ngOnInit() {}
}
