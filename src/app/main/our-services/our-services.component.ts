import { Component } from '@angular/core';
import { CardComponent } from "../../service/card/card.component";

@Component({
  selector: 'app-our-services',
  imports: [CardComponent],
  templateUrl: './our-services.component.html',
  styleUrl: './our-services.component.css',
})
export class OurServicesComponent {
  OurServices = [
    { Image: 'placeholder-image-sport.png', ImageAlt: 'Eukinesis', TextTitle: 'CONSULENZA CHINESIOLOGICA E POSTURALE ', TextBody: 'Analisi accurata dell’allineamento corporeo, dei movimenti e delle catene muscolari per individuare compensi e disfunzioni.'},
    { Image: 'placeholder-image.png', ImageAlt: 'Eukinesis', TextTitle: 'RIEDUCAZIONE POSTURALE', TextBody: 'Percorsi mirati per migliorare la postura, ridurre dolori cronici e ritrovare una corretta percezione del corpo.'},
    { Image: 'placeholder-image.png', ImageAlt: 'Eukinesis', TextTitle: 'ATTIVITÀ FISICA ADATTATA', TextBody: 'Programmi di esercizi personalizzati in base all’età, al livello di forma fisica e agli obiettivi individuali.'},
    { Image: 'placeholder-image.png', ImageAlt: 'Eukinesis', TextTitle: 'PILATES', TextBody: 'Allenamento a corpo libero per rafforzare il core, migliorare equilibrio e flessibilità, e prevenire disturbi posturali.'},
    { Image: 'placeholder-image.png', ImageAlt: 'Eukinesis', TextTitle: 'REHAB PERSONAL TRAINING', TextBody: 'Allenamenti individuali con approccio chinesiologico per ottimizzare performance, postura e benessere globale.'}
  ]
}
