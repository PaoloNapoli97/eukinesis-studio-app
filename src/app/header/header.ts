import { Component } from '@angular/core';
import { HeaderLogoComponent } from "./header-logo-component/header-logo-component";
import { HeaderNavbarComponent } from "./header-navbar-component/header-navbar-component";

@Component({
  selector: 'app-header',
  imports: [HeaderLogoComponent, HeaderNavbarComponent],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

}
