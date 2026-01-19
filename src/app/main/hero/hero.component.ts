import { Component, AfterViewInit, ElementRef } from '@angular/core';

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

  ngAfterViewInit() {
    if (window.innerWidth < 991) {
      setTimeout(() => {
        document.querySelector("h2")?.classList.add("animate");
      }, 50)
    }
  }
}
