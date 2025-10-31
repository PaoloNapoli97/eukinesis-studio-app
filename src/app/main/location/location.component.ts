import { Component } from '@angular/core';
import { MapComponent } from "./map/map.component";
import { TableComponent } from "../../service/table/table.component";

@Component({
  selector: 'app-location',
  imports: [MapComponent, TableComponent],
  templateUrl: './location.component.html',
  styleUrl: './location.component.css'
})
export class LocationComponent {
  schedules = [
    { day: 'Lunedì', hours: '16-20' },
    { day: 'Martedì', hours: '09-12 / 16-20' },
    { day: 'Mercoledì', hours: '16-20' },
    { day: 'Giovedì', hours: '09-12 / 16-20' },
    { day: 'Venerdì', hours: '16-20' }
  ];
}
