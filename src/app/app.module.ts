import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu'; 
import {MatButtonModule} from '@angular/material/button'; 
import {MatIconModule} from '@angular/material/icon';
import { MenuComponent } from './menu/menu.component';
import { BodyComponent } from './body/body.component'; 
import { MatSidenavModule } from '@angular/material/sidenav';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    BodyComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,         // Needed: for menu too
    MatIconModule,
    MatSidenavModule,       // Side nav
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
