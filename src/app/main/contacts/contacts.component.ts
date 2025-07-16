import { Component, Input } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { ListComponent } from "../../service/list/list.component";
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contacts',
  imports: [FormsModule, ListComponent],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
})
export class ContactsComponent {
  @Input() fullName!: string; 
  @Input() object!: string; 
  @Input() text!: string; 
  // fullName = input<string>();
  // object = input<string>();
  // text = input<string>();

  // get mailtoLink(): string {
  //   return `mailto:pingopallino9@gmail.com?subject=${this.fullName()}&body=${this.email()}`;
  // }

  contactList = [
    {description: 'Email',  link: 'mailto:info@eukinesistudio.it', title: 'info@eukinesistudio.it'},
    { link: '', title: "392 123456789" }
  ]
  
  onSubmit() {
    let objectTitle: string  = `${this.fullName}: ${this.object}`;
    window.location.href = `mailto:pingopallino9@gmail.com?subject=${objectTitle}&body=${this.text}`;
  }
}
