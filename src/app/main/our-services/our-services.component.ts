import { Component, ChangeDetectionStrategy, ElementRef, AfterViewInit, OnDestroy, inject } from '@angular/core';
import { CardComponent } from "../../service/card/card.component";

@Component({
  selector: 'app-our-services',
  imports: [CardComponent],
  templateUrl: './our-services.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './our-services.component.css',
})
export class OurServicesComponent implements AfterViewInit, OnDestroy {
  OurServices = [
    { Image: 'LM-26-83.jpg', ImageAlt: 'Eukinesis', TextTitle: 'Valutazione chinesiologico-posturale', TextBody: 'La valutazione chinesiologico-posturale è un’analisi specialistica del movimento e della postura, finalizzata a individuare squilibri muscolari, alterazioni posturali e limitazioni funzionali. \n\nRappresenta il punto di partenza per costruire un percorso di lavoro personalizzato, sicuro e basato su criteri scientifici. \n\nAttraverso l’osservazione del movimento e test specifici è possibile comprendere come il corpo si muove e individuare le strategie più adatte per migliorare la funzionalità, la postura e la condizione fisica generale.'},
    { Image: 'LM-26-81.jpg', ImageAlt: 'Eukinesis', TextTitle: 'Ginnastica correttiva ', TextBody: 'La ginnastica correttiva è un intervento mirato alla rieducazione della postura e del movimento. In età evolutiva rappresenta uno strumento importante anche per il trattamento di scoliosi e paramorfismi, accompagnando la crescita con un lavoro specifico e controllato. \n\n Attraverso esercizi mirati e progressivi si interviene sugli squilibri muscolari e sulle alterazioni della colonna vertebrale, favorendo un migliore allineamento corporeo e una maggiore funzionalità del movimento.'},
    { Image: 'LM-26-75.jpg', ImageAlt: 'Eukinesis', TextTitle: 'ATTIVITÀ FISICA ADATTATA', TextBody: "L'attività fisica adattata è un intervento motorio strutturato e personalizzato, rivolto a persone con problematiche muscolo-scheletriche, patologie stabilizzate, dolore cronico o ridotta capacita funzionale. \n\n A differenza dell'allenamento in palestra, ogni esercizio è selezionato e modulato sulla persona, con l'obiettivo di migliorare la funzionalità, ridurre il dolore e favorire un recupero sicuro e duraturo."},
    { Image: 'LM-26-32.jpg', ImageAlt: 'Eukinesis', TextTitle: 'Ginnastica posturale', TextBody: 'La ginnastica posturale è un’attività finalizzata al miglioramento dell’equilibrio muscolare e della postura. Attraverso esercizi specifici si lavora sulla mobilità articolare, sul controllo del movimento e sulla stabilità del core. \n\n L’obiettivo è ridurre tensioni e sovraccarichi, migliorare la qualità del movimento e favorire il mantenimento nel tempo di una postura più corretta ed efficiente.'},
    { Image: 'LM-26-31.jpg', ImageAlt: 'Eukinesis', TextTitle: 'Pilates', TextBody: 'Il Pilates è un metodo di allenamento che unisce controllo del movimento, respirazione e consapevolezza corporea, con l’obiettivo di migliorare la qualità del movimento, la postura e l’equilibrio muscolare. \n\n Il metodo può essere praticato sia a corpo libero (Matwork), svolto sul tappetino con l’utilizzo di piccoli attrezzi, sia con il Pilates Reformer. \n\n Il lavoro al Reformer consente di rafforzare la muscolatura profonda, migliorare la stabilità del core e aumentare la mobilità articolare grazie al supporto e alla resistenza progressiva del macchinario. Favorisce inoltre un migliore allineamento posturale e permette di sviluppare forza, coordinazione e controllo del corpo, rendendo il movimento più fluido ed efficiente.'}
  ];

  private elementRef = inject(ElementRef<HTMLElement>);
  private observer?: IntersectionObserver;

  ngAfterViewInit(): void {
    // rootMargin negativo = l'animazione parte un po' prima che la sezione
    // sia completamente visibile, come faceva il tuo "-100" originale
    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const elements = this.elementRef.nativeElement.querySelectorAll('.anim');
            elements.forEach((el: Element) => el.classList.add('animate'));
            this.observer?.disconnect(); // fatto una volta sola, come il tuo "flag"
          }
        }
      },
      { rootMargin: '0px 0px -100px 0px' }
    );

    this.observer.observe(this.elementRef.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}