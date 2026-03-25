import { Component } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Router } from '@angular/router'; // Importación correcta

@Component({
  selector: 'app-heroes',
  standalone: false,
  templateUrl: './heroes.html',
  styleUrl: './heroes.css',
})
export class Heroes {

    heroes: any[] = [];

    constructor(private heroesService: HeroesService, 
                private router: Router) {    // Tipo correcto
        console.log("Constructor");
    }

    ngOnInit() {
        this.heroes = this.heroesService.getHeroes();
        //console.log(this.heroes);
        
    }

    muestraHeroe(index: number) {
        this.router.navigate(['heroe/', index]);
        
    }
}
