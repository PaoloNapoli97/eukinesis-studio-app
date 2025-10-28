import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  scrollToInfo(){
    window.scrollTo({
      top: 1100,
      behavior: 'smooth'
    });
  }

  scrollToContacts(): void {
    window.scrollTo({
      top: 1800,
      behavior: 'smooth'
    });
  }

  scrollToLocation(): void {
    window.scrollTo({
      top: 1100,
      behavior: 'smooth'
    });
  }
}
