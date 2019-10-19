import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-page',
  templateUrl: './student-page.component.html',
  styleUrls: ['./student-page.component.css']
})
export class StudentPageComponent implements OnInit {
  resumeSubmit = false;
  training = false;
  interview = false;
  resumeApproval = false;
  isNew = true;

  fileToUpload: File = null;

  constructor() {}

  ngOnInit() {}

  onResumeSubmit() {
    this.resumeSubmit = true;
    this.isNew = false;
  }

  onTraining() {
    this.training = true;
    this.resumeSubmit = false;
  }

  onMock() {
    this.interview = true;
    this.resumeSubmit = false;
  }

  onApproval() {
    this.interview = false;
    this.resumeApproval = true;
  }
}
