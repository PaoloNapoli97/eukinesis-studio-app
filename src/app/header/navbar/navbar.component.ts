import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  scrollToInfo(){
    document.getElementById("aboutUs")!.scrollIntoView({ behavior: 'smooth', block: "start"});
  }

  scrollToContacts(): void {
    document.getElementById("contacts")!.scrollIntoView({ behavior: 'smooth', block: "start"});
  }

  scrollToLocation(): void {
    document.getElementById("location")!.scrollIntoView({ behavior: 'smooth', block: "start"});
  }

  scrollToOurServices(): void {
    document.getElementById("ourServices")!.scrollIntoView({ behavior: 'smooth', block: "start"});
  }
}
