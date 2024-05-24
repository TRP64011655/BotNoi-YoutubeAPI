import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../youtube.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  topVideos: any[] = [];

  constructor(private youtubeService: YoutubeService) { }

  ngOnInit(): void {
    this.youtubeService.getTopVideosWorldwide().subscribe(
      (data) => {
        this.topVideos = data.items;
      },
      (error) => {
        console.error('Error fetching top worldwide videos', error);
      }
    );
  }
}
