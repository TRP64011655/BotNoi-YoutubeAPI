import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopVideosComponent } from './top-videos/top-videos.component';
import { HomeComponent } from './home/home.component';
import { TopVideosWorldWideComponent } from './top-videos-worldwide/top-videos-worldwide.component';
const routes: Routes = [
  { path: '', redirectTo: '/top-videos', pathMatch: 'full' },
  { path: 'top-videos', component: TopVideosComponent },
  { path: 'top-videos-worldwide', component: TopVideosWorldWideComponent },  
  { path: 'home', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
