import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-salida',
  templateUrl: './salida.page.html',
  styleUrls: ['./salida.page.scss'],
})
export class SalidaPage implements OnInit {

  constructor(private router: Router,private route: ActivatedRoute) { }

  home(){
    this.router.navigate(['/home'])
  }
  back(){
    this.router.navigate(['/pagina3'])
  }
  ngOnInit() {
    let estado = this.route.snapshot.paramMap.get('estado')
    let opcion_punteo = this.route.snapshot.paramMap.get('opcion_punteo')
    let punteo = this.route.snapshot.paramMap.get('punteo')
    //let estado_check = this.route.snapshot.paramMap.get('estado_check')
    console.log(estado,opcion_punteo,punteo)   
  }
}
