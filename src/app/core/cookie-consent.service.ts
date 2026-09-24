import { Injectable, signal } from '@angular/core';

declare global {
  interface Window {
    _iub?: {
      cs?: {
        consent?: {
          purposes?: Record<string, boolean>;
        };
      };
    };
  }
}

@Injectable({ providedIn: 'root' })
export class CookieConsentService {
  mapsConsentGiven = signal(this.checkConsent());

  private pollId?: ReturnType<typeof setInterval>;

  constructor() {
    // Se il consenso è già stato dato in una sessione precedente,
    // niente polling: risulta già vero al primo check.
    if (this.mapsConsentGiven()) {
      return;
    }

    this.pollId = setInterval(() => {
      if (this.checkConsent()) {
        this.mapsConsentGiven.set(true);
        if (this.pollId) {
          clearInterval(this.pollId);
        }
      }
    }, 1000);
  }

  private checkConsent(): boolean {
    const purposes = window._iub?.cs?.consent?.purposes;
    if (!purposes) {
      return false;
    }
    // Tutte le categorie accettate = consenso dato.
    // Se in futuro vuoi trattare solo una categoria specifica (es. solo
    // "funzionalità"), qui è dove filtrarla per id invece di controllarle tutte.
    return Object.values(purposes).every(p => p === true);
  }
}
