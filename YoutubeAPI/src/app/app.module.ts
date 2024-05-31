import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopVideosComponent } from './top-videos/top-videos.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { TopVideosWorldWideComponent } from './top-videos-worldwide/top-videos-worldwide.component';

import { HttpInterceptorService } from './http-interceptor.service'; // Import the interceptor service
import { FormsModule } from '@angular/forms';

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
    FormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
