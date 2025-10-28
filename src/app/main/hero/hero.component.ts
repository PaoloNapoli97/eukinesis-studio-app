import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  scrollToContacts(): void {
    window.scrollTo({
      top: 1800,
      behavior: 'smooth'
    });
  }
}
