import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

import { HeaderComponent } from './header/header.component';
import { MainComponent } from "./main/main.component";
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, MainComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class App implements OnInit{
  protected title = 'eukinesis-studio-app'; // variabile interna per il template

  constructor(private meta: Meta, private titleService: Title) {} // rinominato

  ngOnInit() {
    // SEO: titolo della pagina
    this.titleService.setTitle('Eukinesis – Chinesiologia, Posturologia e Pilates a Catania');

    // SEO: meta tag
    this.meta.addTags([
      { name: 'description', content: 'Studio Eukinesis a Catania: chinesiologia, posturologia e corsi di Pilates personalizzati.' },
      { name: 'keywords', content: 'chinesiologia Catania, posturologia Catania, Pilates Catania, riabilitazione postura Catania' }
    ]);
  }
}
