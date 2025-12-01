import { Component, input } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  image = input.required<string>();
  imageAlt = input.required<string>();
  textTitle = input.required<string>();
  textBody = input.required<string>();
}
