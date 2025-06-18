import { Component } from '@angular/core';

import { HeroComponent } from "./hero/hero.component";
import { MapComponent } from "./location/map/map.component";
import { LocationComponent } from "./location/location.component";

@Component({
  selector: 'app-main',
  imports: [HeroComponent, LocationComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
