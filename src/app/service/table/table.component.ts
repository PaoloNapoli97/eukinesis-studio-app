import { Component, input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'tr[app-table-row]',
  standalone: true,
  imports: [],
  templateUrl: './table.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './table.component.css',
  host: {
    '[class.today]': 'isToday()'
  }
})
export class TableComponent {
  day = input.required<string>();
  hours = input.required<string[]>();
  isToday = input<boolean>(false);
}
