import { Component } from '@angular/core';

import { HeroComponent } from "./hero/hero.component";
import { LocationComponent } from "./location/location.component";
import { InformationsComponent } from "./informations/informations.component";

@Component({
  selector: 'app-main',
  imports: [HeroComponent, LocationComponent, InformationsComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
