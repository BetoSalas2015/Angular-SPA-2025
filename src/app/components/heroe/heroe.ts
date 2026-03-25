import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  standalone: false,
  templateUrl: './heroe.html',
  styleUrl: './heroe.css',
})
export class Heroe {  

    heroe: any = {};

    constructor(private activatedRoute: ActivatedRoute,
                private heroesService: HeroesService) {
        this.activatedRoute.params.subscribe( (params) => {
            this.heroe = this.heroesService.getHeroe(params['id']);
            console.log(this.heroe);
            
        });
    }
}
