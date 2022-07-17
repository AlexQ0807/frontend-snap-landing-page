import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Input() sidenavOpen: boolean = false;

  @Output() sidenavEvent = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  toggleSideNav(){
    this.sidenavOpen = !this.sidenavOpen;
    this.sidenavEvent.emit(this.sidenavOpen);
  }

}
