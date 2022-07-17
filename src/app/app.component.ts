import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'snap-landing-page';

  sidenavOpen: boolean = false;

  readonly widthThresholdMd = 768; //px
  readonly screenOffset = 68; // px
  screenWidth: any;

  sidenavHandle($event: boolean){
    this.sidenavOpen = $event;
  }

  ngOnInt(){
    this.screenWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.screenWidth = window.innerWidth;
    console.log(this.screenWidth);

    if(this.screenWidth > this.widthThresholdMd - this.screenOffset){
      console.log("Close");
      this.sidenavOpen = false;
    }
  }
}
