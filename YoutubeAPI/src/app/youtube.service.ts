import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  private apiKey = 'AIzaSyABXr9bp1NDDo-tINnTCeHp4u1ekK5IZU8';
  private apiUrl = 'https://www.googleapis.com/youtube/v3/videos';

  // Mock data for top videos
  private mockTopVideos = {
    items: [
      {
        id: 'mock1',
        snippet: {
          title: 'Mock Video 1',
          thumbnails: {
            high: {
              url: 'path/to/mock-thumbnail1.jpg'
            }
          }
        }
      },
      {
        id: 'mock2',
        snippet: {
          title: 'Mock Video 2',
          thumbnails: {
            high: {
              url: 'path/to/mock-thumbnail2.jpg'
            }
          }
        }
      },
    ]
  };

  constructor(private http: HttpClient) { }

  getTopVideos(regionCode: string = 'TH', maxResults: number = 10): Observable<any> {
    const params = new HttpParams()
      .set('part', 'snippet,contentDetails,statistics')
      .set('chart', 'mostPopular')
      .set('regionCode', regionCode)
      .set('maxResults', maxResults.toString())
      .set('key', this.apiKey);

    return this.http.get(this.apiUrl, { params }).pipe(
      catchError(error => {
        console.error('Error fetching top videos', error);
        // Return mock data in case of error
        return of(this.mockTopVideos);
      })
    );
  }

  getTopVideosWorldwide(maxResults: number = 10): Observable<any> {
    return this.getTopVideos('', maxResults);
  }
}
