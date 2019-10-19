import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-page',
  templateUrl: './company-page.component.html',
  styleUrls: ['./company-page.component.css']
})
export class CompanyPageComponent implements OnInit {
  constructor() {}

  public gpa = '';

  onFilter() {
    console.log(this.gpa);
  }

  setGpa(gpa) {
    this.gpa = gpa;
    console.log(this.gpa);
  }

  ngOnInit() {}
}
