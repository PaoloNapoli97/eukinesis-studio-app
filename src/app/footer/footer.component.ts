import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';


@Component({
  selector: 'app-footer',
  imports: [MatButtonModule, MatDialogModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  footerData = [
    // {link: '/', text: '&#f09a'},
    {link: '', text: 'Irene Agata Napoli - P.IVA: IT06158240876'},
    {link: 'mailto:info@eukinesistudio.it', text: 'info@eukinesistudio.it'},
    {link: 'https://maps.google.com/maps?ll=37.515783,15.077035&z=19&t=m&hl=it&gl=US&mapclient=apiv3&cid=8122947406870052066', text: 'Via Cesare Vivante, 67 CT'}
  ];

  readonly dialog = inject(MatDialog);

  openDialog() {
    const dialogRef = this.dialog.open(FooterPopup);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'footer-popup.component.html',
  imports: [MatDialogModule, MatButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterPopup{
}