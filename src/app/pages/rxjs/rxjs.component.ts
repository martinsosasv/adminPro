import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { retry, map, filter } from "rxjs/operators";

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnInit, OnDestroy {

  subscription: Subscription;

  constructor() {

    this.subscription =  this.regresaObservable().subscribe(
        numero => console.log(numero),
        error => console.error("Error", error),
        () => console.log("El observador terminó")
      );
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    console.log( "La pagina se va a cerrar" );
    this.subscription.unsubscribe();
  }

  regresaObservable(): Observable<any> {

    return new Observable(observer => {

      let contador = 0;
      let intervalo = setInterval(() => {

        contador += 1;
        let respuesta = {
          valor: contador
        };

        observer.next(respuesta);

        // if (contador === 3) {
        //   clearInterval(intervalo);
        //   observer.complete();
        // }

        // if (contador === 2) {
        //   // clearInterval( intervalo );
        //   observer.error('Auxilio!');
        // }

      }, 1000);
    }).pipe(
      map( (resp: any) => resp.valor ),
      filter( (value, index) => {

        if( (value % 2) == 1 ) {
          return true;

        } else {
          return false;
        }
      })
    );

  }

}
