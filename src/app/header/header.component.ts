import { Component } from '@angular/core';
import { HeaderLogoComponent } from "./header-logo/header-logo.component";
import { NavbarComponent } from "./navbar/navbar.component";

@Component({
  selector: 'app-header',
  imports: [HeaderLogoComponent, NavbarComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
