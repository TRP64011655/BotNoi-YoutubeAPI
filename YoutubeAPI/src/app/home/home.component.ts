import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { YoutubeService } from '../youtube.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  topVideos: any[] = [];

  @ViewChild('emailInput', { static: true }) emailInput!: ElementRef;
  @ViewChild('passwordInput', { static: true }) passwordInput!: ElementRef;

  constructor(private youtubeService: YoutubeService, private router: Router) {}

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

  onLogin(): void {
    const email = this.emailInput.nativeElement.value;
    const password = this.passwordInput.nativeElement.value;

    if (email && password) {
      localStorage.setItem('email', email);
      localStorage.setItem('password', password);
      this.router.navigate(['/top-videos']);
    } else {
      alert('Please enter both email and password');
    }
  }
}
