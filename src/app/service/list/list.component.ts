import { Component, input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-list',
  imports: [],
  templateUrl: './list.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './list.component.css'
})
export class ListComponent {
  link = input.required<string>();
  text = input.required<string>();
}
