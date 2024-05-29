import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopVideosComponent } from './top-videos/top-videos.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { TopVideosWorldWideComponent } from './top-videos-worldwide/top-videos-worldwide.component';

@NgModule({
  declarations: [
    AppComponent,
    TopVideosComponent,
    NavbarComponent,
    HomeComponent,
    TopVideosWorldWideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
