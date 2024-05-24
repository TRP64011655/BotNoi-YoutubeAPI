import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopVideosComponent } from './top-videos/top-videos.component';

const routes: Routes = [
  { path: '', redirectTo: '/top-videos', pathMatch: 'full' },
  { path: 'top-videos', component: TopVideosComponent },
  // Add more routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
