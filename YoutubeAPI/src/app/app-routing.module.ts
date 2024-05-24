import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopVideosComponent } from './top-videos/top-videos.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/top-videos', pathMatch: 'full' },
  { path: 'top-videos', component: TopVideosComponent },
  { path: 'home', component: HomeComponent },
  // Add more routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
