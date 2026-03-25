import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  standalone: false,
  templateUrl: './heroe-tarjeta.html',
  styleUrl: './heroe-tarjeta.css',
})

export class HeroeTarjeta {

    @Input()
    heroe: any = {};

    @Input()
    index: number = 0;

    constructor(private router: Router) {

    }

    muestraHeroe() {
        this.router.navigate(['/heroe', this.index]);
    }
}
