import { Component, ElementRef, viewChild } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  scrollToContacts(): void {
    document.getElementById("contacts")!.scrollIntoView({ behavior: 'smooth', block: "start"});
  }

  ngAfterViewInit() {
    if (window.innerWidth < 991) {
      setTimeout(() => {
        document.querySelector("h2")?.classList.add("animate");
      }, 50)
    }
  }
}
