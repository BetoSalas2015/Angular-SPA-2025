import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

    constructor( private router: Router ) {
        
    }

    ngOnInit() {

    }

    buscarHeroe(nombre: string) {
        // console.log(nombre);;
        this.router.navigate(['/busqueda', nombre]);
    }
}
