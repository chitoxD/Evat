import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-extra',
  templateUrl: './extra.page.html',
  styleUrls: ['./extra.page.scss'],
})
export class ExtraPage implements OnInit {

  constructor(private router: Router) { }
  preo_enfermera1(){
    //this.router.navigate(['/']) aqui la pagina donde ira al final, de la primera opcion
  }
  preo_enfermera2(){
    //this.router.navigate(['/']) aqui la pagina donde ira al final, de la segunda opcion
  }

  anterior(){
    //this.router.navigate(['/']) aqui ira a la anterior pagina.
  }
  adelante(){
    //this.router.navigate(['/']) aqui ira a la siguiente pagina.
  }

  ngOnInit() {
  }

}
