import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../youtube.service';

@Component({
  selector: 'app-top-videos',
  templateUrl: './top-videos.component.html',
  styleUrls: ['./top-videos.component.css']
})
export class TopVideosComponent implements OnInit {
  topVideos: any[] = [];

  constructor(private youtubeService: YoutubeService) { }

  ngOnInit(): void {
    this.youtubeService.getTopVideos().subscribe(
      (data) => {
        this.topVideos = data.items;
      },
      (error) => {
        console.error('Error fetching top videos', error);
      }
    );
  }
}
