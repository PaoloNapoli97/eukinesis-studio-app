import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { GoogleMap, MapMarker } from '@angular/google-maps';
import { CookieConsentService } from '../../../core/cookie-consent.service';

@Component({
  selector: 'app-map',
  imports: [GoogleMap, MapMarker],
  templateUrl: './map.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './map.component.css'
})
export class MapComponent {
  center: google.maps.LatLngLiteral = { lat: 37.51584, lng: 15.07721 };

  private consent = inject(CookieConsentService);
  mapsConsentGiven = this.consent.mapsConsentGiven;
}