import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-page',
  templateUrl: './student-page.component.html',
  styleUrls: ['./student-page.component.css']
})
export class StudentPageComponent implements OnInit {
  resumeSubmit = true;
  training = false;
  interview = false;
  resumeApproval = false;

  constructor() {}

  ngOnInit() {}
}
