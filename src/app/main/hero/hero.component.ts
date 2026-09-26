import { Component, ChangeDetectionStrategy, signal, computed, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './hero.component.css'
})
export class HeroComponent implements OnInit, OnDestroy {

  // Sostituisci con i path reali delle tue immagini in /public
  images = [
    '/LM-26-5.jpg',
    '/LM-26-6.jpg',
    '/LM-26-7.jpg'
  ];

  // Clone della prima immagine in fondo alla fila: serve per lo scroll
  // infinito senza scatto visibile quando si torna all'inizio
  extendedImages = [...this.images, this.images[0]];

  currentIndex = signal(0);
  transitionEnabled = signal(true);

  // Indice "reale" (0..images.length-1) usato per evidenziare il dot corretto,
  // anche quando currentIndex è sul clone finale
  realIndex = computed(() => this.currentIndex() % this.images.length);

  trackTransform = computed(() => `translateX(${-this.currentIndex() * 100}%)`);

  private intervalId?: ReturnType<typeof setInterval>;
  private readonly slideDurationMs = 5000;

  ngOnInit(): void {
    // Precarica tutte le immagini in memoria prima di far partire l'autoplay:
    // così la prima transizione (e le successive) non devono scaricare/decodificare
    // l'immagine proprio mentre l'animazione è in corso — quello causa il micro-scatto.
    this.preloadImages().then(() => this.startAutoplay());
  }

  private preloadImages(): Promise<void> {
    const loaders = this.extendedImages.map(src => new Promise<void>(resolve => {
      const img = new Image();
      img.onload = () => resolve();
      img.onerror = () => resolve(); // un'immagine rotta non deve bloccare tutto il carousel
      img.src = src;
    }));
    return Promise.all(loaders).then(() => undefined);
  }

  ngOnDestroy(): void {
    this.stopAutoplay();
  }

  goTo(index: number): void {
    this.transitionEnabled.set(true);
    this.currentIndex.set(index);
    this.stopAutoplay();
    this.startAutoplay();
  }

  // Quando l'animazione arriva al clone (ultimo elemento della fila),
  // torniamo istantaneamente al vero indice 0 senza transizione:
  // da fuori sembra che il nastro continui a scorrere in avanti
  onTransitionEnd(): void {
    if (this.currentIndex() === this.extendedImages.length - 1) {
      this.transitionEnabled.set(false);
      this.currentIndex.set(0);

      // Riattiva la transizione al frame successivo: se lo facessimo
      // subito, il browser animerebbe anche questo salto
      requestAnimationFrame(() => {
        requestAnimationFrame(() => this.transitionEnabled.set(true));
      });
    }
  }

  private startAutoplay(): void {
    this.intervalId = setInterval(() => {
      this.transitionEnabled.set(true);
      this.currentIndex.update(i => i + 1);
    }, this.slideDurationMs);
  }

  private stopAutoplay(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  scrollToContacts(): void {
    document.getElementById('contacts')!.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  // Animation class add for tablet and phone
  ngAfterViewInit() {
    if (window.innerWidth < 991) {
      setTimeout(() => {
        document.querySelector('h2')?.classList.add('animate');
      }, 50);
    }
  }
}
