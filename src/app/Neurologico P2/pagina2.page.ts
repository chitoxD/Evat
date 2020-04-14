import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagina2',
  templateUrl: './pagina2.page.html',
  styleUrls: ['./pagina2.page.scss'],
})
export class Pagina2Page implements OnInit {

  constructor(private router: Router) { }

  regreso1(){
    this.router.navigate(['/home'])
  }
  adelante3(){
    this.router.navigate(['/pagina3'])
  }
// en los metodos se envia la pagina,estado,checkbox y el punteo  
  ir_salida1(){
    this.router.navigate(['/salida/Neurológico/Somnoliento/1'])
  }
  ir_salida2(){
    this.router.navigate(['salida/Neurológico/estimulos verbales/1'])
  }

  ngOnInit() {
  }
}
