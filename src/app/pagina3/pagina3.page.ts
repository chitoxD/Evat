import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-pagina3',
  templateUrl: './pagina3.page.html',
  styleUrls: ['./pagina3.page.scss'],
})
export class Pagina3Page implements OnInit {

  constructor(private router: Router,public alertController: AlertController) { }

  regreso2(){
    this.router.navigate(['/pagina2'])
  }
  
  ir_salida1(){
    this.router.navigate(['salida/Neurológico/alerta o durmiendo/0']);
  }
  ir_salida2(){
    this.router.navigate(['salida/Neurológico/estado basal de alerta/0']);
  }
  async alerta() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      subHeader: 'Usted no selecciono ninguna opcion',
      message: 'Seleccione una opcion por favor',
      buttons: ['OK']
    });

    await alert.present();
  }

  ngOnInit() {
  }

}
