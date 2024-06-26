import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  private apiKey = 'AIzaSyABXr9bp1NDDo-tINnTCeHp4u1ekK5IZU8';
  private apiUrl = 'https://www.googleapis.com/youtube/v3/videos';
  private mockDataUrl = '/assets/mock-top-videos.json';
  private mockDataTHUrl = '/assets/mock-top-videos-th.json';  

  constructor(private http: HttpClient) { }

  getTopVideos(regionCode: string = 'TH', maxResults: number = 10): Observable<any> {
    const params = new HttpParams()
      .set('part', 'snippet,contentDetails,statistics')
      .set('chart', 'mostPopular')
      .set('regionCode', regionCode)
      .set('maxResults', maxResults.toString())
      .set('key', this.apiKey);

    const mockUrl = regionCode === 'TH' ? this.mockDataTHUrl : this.mockDataUrl;

    return this.http.get(this.apiUrl, { params }).pipe(
      catchError(error => {
        console.error('Error fetching top videos', error);
        return this.http.get<any>(mockUrl);
      })
    );
  }

  getTopVideosWorldwide(maxResults: number = 10): Observable<any> {
    return this.getTopVideos('', maxResults);
  }
}
