import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isDropdownMenuVisible = false;

  toggleDropdownMenu() {
    this.isDropdownMenuVisible = !this.isDropdownMenuVisible;
    const burgerMenu = document.querySelector('.burger-menu');
    burgerMenu?.classList.toggle('change');
  }
}
