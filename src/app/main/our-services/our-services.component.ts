import { Component, HostListener } from '@angular/core';
import { CardComponent } from "../../service/card/card.component";

@Component({
  selector: 'app-our-services',
  imports: [CardComponent],
  templateUrl: './our-services.component.html',
  styleUrl: './our-services.component.css',
})
export class OurServicesComponent {
  OurServices = [
    { Image: 'LM-26-83.jpg', ImageAlt: 'Eukinesis', TextTitle: 'CONSULENZA CHINESIOLOGICA E POSTURALE ', TextBody: 'Analisi accurata dell’allineamento corporeo, dei movimenti e delle catene muscolari per individuare compensi e disfunzioni.'},
    { Image: 'LM-26-32.jpg', ImageAlt: 'Eukinesis', TextTitle: 'RIEDUCAZIONE POSTURALE', TextBody: 'Percorsi mirati per migliorare la postura, ridurre dolori cronici e ritrovare una corretta percezione del corpo.'},
    { Image: 'LM-26-75.jpg', ImageAlt: 'Eukinesis', TextTitle: 'ATTIVITÀ FISICA ADATTATA', TextBody: 'Programmi di esercizi personalizzati in base all’età, al livello di forma fisica e agli obiettivi individuali.'},
    { Image: 'LM-26-31.jpg', ImageAlt: 'Eukinesis', TextTitle: 'PILATES', TextBody: 'Allenamento a corpo libero per rafforzare il core, migliorare equilibrio e flessibilità, e prevenire disturbi posturali.'},
    { Image: 'LM-26-81.jpg', ImageAlt: 'Eukinesis', TextTitle: 'REHAB PERSONAL TRAINING', TextBody: 'Allenamenti individuali con approccio chinesiologico per ottimizzare performance, postura e benessere globale.'}
  ]

  private ourService = document.getElementById('ourServices');
  private flag = false
  
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const y = window.scrollY;
    const ourServicesY = this.ourService!.getBoundingClientRect().top + window.scrollY;
    // 1777.3125

    if (y >= ourServicesY - 100 && !this.flag) {
      const elements = document.getElementsByClassName('anim');

      for ( const el of elements) {
        el.classList.add("animate");
      }

      this.flag = true;
      console.log("fine");
      
    }
  }
}
