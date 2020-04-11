import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-extra',
  templateUrl: './extra.page.html',
  styleUrls: ['./extra.page.scss'],
})
export class ExtraPage implements OnInit {

  constructor() { }

  public form = [
    { val: 'Preocupacion de la enfermera', isChecked: false },
    { val: 'Preocupacion de la familia', isChecked: false }
  ];

  anterior(){

  }
  adelante(){
    
  }
  ngOnInit() {
  }

}
