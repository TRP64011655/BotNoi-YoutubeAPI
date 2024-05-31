import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../youtube.service';

export interface Video {
  id: string;
  snippet: {
    title: string;
    description: string;
    thumbnails: {
      default: {
        url: string;
      };
      high: {
        url: string;
      };
    };
  };
}

@Component({
  selector: 'app-top-videos-worldwide',
  templateUrl: './top-videos-worldwide.component.html',
  styleUrls: ['./top-videos-worldwide.component.css']
})

export class TopVideosWorldWideComponent implements OnInit {
  topVideos: any[] = [];

  constructor(private youtubeService: YoutubeService) { }

  ngOnInit(): void {
    this.youtubeService.getTopVideos().subscribe(
      (data) => {
        this.topVideos = data.items.map((item: any) => ({
          id: item.id,
          snippet: {
            title: item.snippet.title,
            description: item.snippet.description,
            thumbnails: {
              default: {
                url: item.snippet.thumbnails.default.url
              },
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
