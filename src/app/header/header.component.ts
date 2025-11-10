import { Component } from '@angular/core';
import { HeaderLogoComponent } from "./header-logo/header-logo.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { HeaderTitleComponent } from './header-title/header-title.component';

@Component({
  selector: 'app-header',
  imports: [HeaderLogoComponent, NavbarComponent, HeaderTitleComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
}
