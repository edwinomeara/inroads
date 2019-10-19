import { Component, OnInit } from '@angular/core';
import { User } from '../shared/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor() {}

  firstName = '';
  userName = '';
  passWord = '';

  skills = [];
  skill = '';
  count = 0;
  skillsObj = {};
  duplicated = false;
  isEmpty = false;

  remove = '';

  user = new User('', '', '', '', '', '', {}, '');

  submitted = false;

  onSubmit() {
    this.submitted = true;
    this.user.skills = this.skillsObj;
    console.log(JSON.stringify(this.user)); // Here's the data in json
  }

  onRegister() {}

  addSkill() {
    //check for duplicates before adding here

    //removes the warning
    this.duplicated = false;
    this.isEmpty = false;

    if (this.skill == '') {
      this.isEmpty = true;
      return;
    }

    if (this.skills.includes(this.skill)) {
      //sends the warning, and will not add that skill
      this.duplicated = true;
      return;
    }

    //did all this because arrays cannot be in json, has to be an object
    //skillsList{count: skill}

    this.skillsObj[this.count] = this.skill;
    this.skills.push(this.skillsObj[this.count]);
    this.count++;
    this.skill = '';
  }

  removeSkill(removeSkill: String) {
    this.skills.forEach(skill => {
      //console.log(skill);
      if (removeSkill == skill) {
        var index = this.skills.indexOf(skill);
        this.skills.splice(index, 1);

        //don't know how to remove an object from an array in typescrip.. will fix this later
        this.skillsObj[index] = null;
      }
    });
  }

  get diagnostic() {
    return JSON.stringify(this.user);
  }

  ngOnInit() {}
}
