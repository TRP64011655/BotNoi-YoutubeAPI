import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isDropdownMenuVisible = false;
  isHomeRoute: boolean = false; 

  constructor(private router: Router) {
    this.router.events.subscribe(val => {
      this.isHomeRoute = this.router.url === '/home';
    });
  }

  toggleDropdownMenu() {
    this.isDropdownMenuVisible = !this.isDropdownMenuVisible;
    const burgerMenu = document.querySelector('.burger-menu');
    burgerMenu?.classList.toggle('change');
  }
}
