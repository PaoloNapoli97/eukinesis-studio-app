import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MapComponent } from "./map/map.component";
import { TableComponent } from "../../service/table/table.component";

interface Schedule {
  day: string;
  hours: string[];
}

@Component({
  selector: 'app-location',
  imports: [MapComponent, TableComponent],
  templateUrl: './location.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './location.component.css'
})
export class LocationComponent {
  schedules: Schedule[] = [
    { day: 'Lunedì', hours: ['16:00–20:00'] },
    { day: 'Martedì', hours: ['09:00–12:00', '16:00–20:00'] },
    { day: 'Mercoledì', hours: ['16:00–20:00'] },
    { day: 'Giovedì', hours: ['09:00–12:00', '16:00–20:00'] },
    { day: 'Venerdì', hours: ['16:00–20:00'] },
  ];

  // Date.getDay(): 0 = Domenica ... 6 = Sabato
  private dayNames = ['Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì'];
  private todayName = this.dayNames[new Date().getDay()];

  isToday(day: string): boolean {
    return day === this.todayName;
  }
}
