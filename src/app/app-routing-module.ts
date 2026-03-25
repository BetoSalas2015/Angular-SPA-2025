
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './components/home/home' 
import { Heroes } from './components/heroes/heroes';
import { About } from './components/about/about'
import { Heroe } from './components/heroe/heroe';
import { Busqueda } from './components/busqueda/busqueda';

const routes: Routes = [
  { path: 'home', component: Home },
  { path: 'heroes', component: Heroes },
  { path: 'about', component: About },
  { path: 'heroe/:id', component: Heroe },
  { path: 'busqueda/:termino', component: Busqueda },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
