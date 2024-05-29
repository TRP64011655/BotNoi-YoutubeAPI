import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../youtube.service';

@Component({
  selector: 'app-top-videos-worldwide',
  templateUrl: './top-videos-worldwide.component.html',
  styleUrls: ['./top-videos-worldwide.component.css']
})
export class TopVideosWorldWideComponent implements OnInit {
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
