import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Rutas
import { AppRoutingModule } from './app-routing-module';

import { App } from './app';

// Componentes
import { Navbar } from './components/shared/navbar/navbar';
import { Home } from './components/home/home';
import { About } from './components/about/about';
import { Heroes } from './components/heroes/heroes';

// Servicios
import { HeroesService } from './services/heroes.service';
import { Heroe } from './components/heroe/heroe';
import { Busqueda } from './components/busqueda/busqueda';
import { HeroeTarjeta } from './components/heroe-tarjeta/heroe-tarjeta';

@NgModule({
  declarations: [
    App,
    Navbar,
    Home,
    About,
    Heroes,
    Heroe,
    Busqueda,
    HeroeTarjeta
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    HeroesService
  ],
  bootstrap: [App]
})
export class AppModule { }
