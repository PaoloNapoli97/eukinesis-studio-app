import { Component, input } from '@angular/core';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contacts',
  imports: [FormsModule],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
})
export class ContactsComponent {
  fullName = input.required<string>();
  object = input.required<string>()
  text = input.required<string>();



  // get mailtoLink(): string {
  //   return `mailto:pingopallino9@gmail.com?subject=${this.fullName()}&body=${this.email()}`;
  // }
  
  onSubmit() {
    let objectTitle: string  = `${this.fullName} : ${this.object}`;
    window.location.href = `mailto:pingopallino9@gmail.com?subject=${objectTitle}&body=${this.text}`;
  }
}
