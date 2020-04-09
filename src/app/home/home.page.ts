import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  
  constructor(private router: Router) {}

  adelante(){//esta no importa que valor tenga solo va para adeltante
    this.router.navigate(['/pagina2'])
  }
  regreso(){

  }

  ir_salida1(){//esta es de la primera opcion
    this.router.navigate(['/salida/Neurológico/Irritable/2']);
  }
  ir_salida2(){
    this.router.navigate(['/salida/Neurológico/Dificil de consolar/2'])
  }
  ir_salida3(){
    this.router.navigate(['/salida/Neurológico/Estimulos dolorosos/2'])
  }
}
