import { Component } from '@angular/core';
import { ListComponent } from "../service/list/list.component";

@Component({
  selector: 'app-footer',
  imports: [ListComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  footerData = [
    // {link: '/', text: '&#f09a'},
    {link: 'mailto:info@eukinesistudio.it', text: 'info@eukinesistudio.it'},
    {link: 'https://maps.google.com/maps?ll=37.515783,15.077035&z=19&t=m&hl=it&gl=US&mapclient=apiv3&cid=8122947406870052066', text: 'Via Cesare Vivante, 67 CT'}
  ]
}
