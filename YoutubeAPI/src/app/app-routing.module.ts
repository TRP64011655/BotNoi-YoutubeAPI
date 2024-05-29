import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopVideosComponent } from './top-videos/top-videos.component';
import { HomeComponent } from './home/home.component';
import { TopVideosWorldWideComponent } from './top-videos-worldwide/top-videos-worldwide.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/top-videos', pathMatch: 'full' },
  { path: 'top-videos', component: TopVideosComponent, canActivate: [AuthGuard] },
  { path: 'top-videos-worldwide', component: TopVideosWorldWideComponent, canActivate: [AuthGuard] },
  { path: 'home', component: HomeComponent },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
