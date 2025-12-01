import { Component } from '@angular/core';

import { HeroComponent } from "./hero/hero.component";
import { LocationComponent } from "./location/location.component";
import { InformationsComponent } from "./informations/informations.component";
import { ContactsComponent } from "./contacts/contacts.component";
import { OurServicesComponent } from "./our-services/our-services.component";

@Component({
  selector: 'app-main',
  imports: [HeroComponent, LocationComponent, InformationsComponent, ContactsComponent, OurServicesComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
