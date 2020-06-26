import { Component, OnInit } from '@angular/core';
import { resolve } from 'dns';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [
  ]
})
export class PromesasComponent implements OnInit {

  constructor() { 

    this.contarTres().then( data => {
      console.log("Terminó!", data);
    })
    .catch( error => {
      console.error("Ha ocurrido un error", error );
    });

  }

  ngOnInit(): void {
  }

  contarTres(){

    return new Promise<boolean>( (resolve, reject) => {

      let contador = 0;

      let intervalo = setInterval( () => {

        contador += 1;
        console.log(contador);
        if(contador === 3){
        
          resolve(true);
          // reject("Un simple error");
          clearInterval(intervalo);

        }
      }, 1000);
    });
  }

}
