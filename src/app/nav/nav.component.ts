import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor() { }

  @Input()
  isNav: boolean = false;

  @Input()
  sidenav: any;

  featureOpen: boolean = false;
  companiesOpen: boolean = false;


  featureList = [
    {
      "title": "To do List",
      "imgUrl": "../../assets/images/icon-todo.svg"
    },
    {
      "title": "Calendars",
      "imgUrl": "../../assets/images/icon-calendar.svg"
    },
    {
      "title": "Remainders",
      "imgUrl": "../../assets/images/icon-reminders.svg"
    },
    {
      "title": "Planning",
      "imgUrl": "../../assets/images/icon-planning.svg"
    }
  ];

  companiesList = [
    {
      "title": "History",
    },
    {
      "title": "Our Team",
    },
    {
      "title": "Blog",
    },
  ];

  ngOnInit(): void {
  }

  toggleFeatures(){
    this.featureOpen = !this.featureOpen;
  }

  toggleCompanies(){
    this.companiesOpen = !this.companiesOpen;
  }

}
