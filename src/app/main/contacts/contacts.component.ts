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
    {description: 'Email',  link: 'mailto:info@eukinesistudio.it', title: 'info@eukinesistudio.it', icon: 'envelope-solid.svg'},
    {description: 'Telefono', link: 'https://wa.me/3518012460', title: "351 801 2460", icon: 'whatsapp-brands.svg'},
    {description: 'Socials', socials: [
      {link: 'https://www.facebook.com/profile.php?id=61574823591904', title: 'Facebook', icon: 'facebook-brands.svg'},
      {link: 'https://www.instagram.com/eukinesistudio/', title:'Instagram', icon:'instagram-brands-solid-full.svg'}
      ]
    }
  ]
  
  onSubmit() {
    let objectTitle: string  = `${this.fullName}: ${this.object}`;
    window.location.href = `mailto:info@eukinesistudio.it?subject=${objectTitle}&body=${this.text}`;
  }
}
