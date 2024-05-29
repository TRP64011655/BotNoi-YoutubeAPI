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
  isEmailEmpty: boolean = false;
  isPasswordEmpty: boolean = false;

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

    this.isEmailEmpty = !email;
    this.isPasswordEmpty = !password;

    if (email && password) {
      if (this.isValidEmail(email)) {
        // Mocking username and token
        const username = 'mockUsername';
        const token = 'mockToken123';

        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
        localStorage.setItem('username', username);
        localStorage.setItem('token', token);

        this.router.navigate(['/top-videos']);
      } else {
        alert('Please enter a valid email address');
      }
    } else {
      alert('Please enter both email and password');
    }
  }

  isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  removeEmptyClass(input: HTMLInputElement): void {
    input.classList.remove('empty-input');
  }

  handleKeyPress(event: KeyboardEvent, input: HTMLInputElement): void {
    if (input.classList.contains('empty-input')) {
      input.classList.remove('empty-input');
    }
  }
}
