import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  private apiKey = 'AIzaSyABXr9bp1NDDo-tINnTCeHp4u1ekK5IZU8';
  private apiUrl = 'https://www.googleapis.com/youtube/v3/videos';

  constructor(private http: HttpClient) { }

  getTopVideos(regionCode: string = 'TH', maxResults: number = 10): Observable<any> {
    const params = {
      part: 'snippet,contentDetails,statistics',
      chart: 'mostPopular',
      regionCode: regionCode,
      maxResults: maxResults.toString(),
      key: this.apiKey
    };
    return this.http.get(this.apiUrl, { params });
  }

  getTopVideosWorldwide(maxResults: number = 10): Observable<any> {
    return this.getTopVideos('', maxResults);
  }
  
}
