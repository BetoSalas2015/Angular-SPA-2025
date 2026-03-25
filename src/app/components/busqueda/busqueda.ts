import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-busqueda',
  standalone: false,
  templateUrl: './busqueda.html',
  styleUrl: './busqueda.css',
})
export class Busqueda {

  heroes: any[] = [];
  termino: string = '';
   
    constructor( private activatedRoute: ActivatedRoute,
                 private heroesService: HeroesService,
                 private router: Router) {

    }

    ngOnInit() {
          this.activatedRoute.params.subscribe(params => {
          this.termino = params['termino'];
          this.heroes = this.heroesService.buscarHeroes(params['termino']);          
        })
    }

    muestraHeroe(index: number) {
        this.router.navigate(['heroe/', index]);
        
    }
}
