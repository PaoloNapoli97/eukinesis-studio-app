import { Component, ChangeDetectionStrategy, signal, computed, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './hero.component.css'
})
export class HeroComponent implements OnInit, OnDestroy {

  images = [
    '/LM-26-5.jpg',
    '/LM-26-126.jpg',
    '/LM-26-11.jpg',
    '/LM-26-16.jpg'
  ];

  // Clone first array image to 5th and last slot to keep the infinite scrool
  extendedImages = [...this.images, this.images[0]];

  currentIndex = signal(0);
  transitionEnabled = signal(true);

  //show the real index of the image, not the extended one
  realIndex = computed(() => this.currentIndex() % this.images.length);

  trackTransform = computed(() => `translateX(${-this.currentIndex() * 100}%)`);

  private intervalId?: ReturnType<typeof setInterval>;
  private readonly slideDurationMs = 5000;

  ngOnInit(): void {
    // should preload all images but I don't think it's working. Shall check later
    this.preloadImages().then(() => this.startAutoplay());
  }

  private preloadImages(): Promise<void> {
    const loaders = this.extendedImages.map(src => new Promise<void>(resolve => {
      const img = new Image();
      img.onload = () => resolve();
      img.onerror = () => resolve(); //Fix eventual error
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

  // Set indext to 0 when the last image is reached, to create an infinite loop effect
  onTransitionEnd(): void {
    if (this.currentIndex() === this.extendedImages.length - 1) {
      this.transitionEnabled.set(false);
      this.currentIndex.set(0);

      //reload animation frame to ensure the transition is disabled before re-enabling it
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
