import { Component, OnInit } from '@angular/core';
import { User } from '../shared/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor() {}

  userName = '';
  passWord = '';

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

    this.submitted = true;
    console.log(JSON.stringify(this.user)); // Here's the data in json
  }

  ngOnInit() {}
}
