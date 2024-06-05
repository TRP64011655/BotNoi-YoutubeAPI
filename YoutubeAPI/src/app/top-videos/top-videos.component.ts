import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../youtube.service';

export interface Video {
  id: string;
  snippet: {
    title: string;
    description?: string;
    thumbnails: {
      default?: {
        url: string;
      };
      high: {
        url: string;
      };
    };
  };
}

@Component({
  selector: 'app-top-videos',
  templateUrl: './top-videos.component.html',
  styleUrls: ['./top-videos.component.css']
})
export class TopVideosComponent implements OnInit {
  topVideos: Video[] = [];

  constructor(private youtubeService: YoutubeService) { }

  ngOnInit(): void {
    this.youtubeService.getTopVideos('TH').subscribe(
      (data) => {
        console.log('Received data:', data); 
        this.topVideos = data.items.map((item: any) => ({
          id: item.id,
          snippet: {
            title: item.snippet.title,
            description: item.snippet.description,
            thumbnails: {
              default: item.snippet.thumbnails.default ? { url: item.snippet.thumbnails.default.url } : undefined,
              high: {
                url: item.snippet.thumbnails.high.url
              }
            }
          }
        }));
      },
      (error) => {
        console.error('Error fetching top videos', error);
      }
    );
  }
}
