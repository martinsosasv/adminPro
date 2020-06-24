import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from "@angular/common";
import { SettingsService } from 'src/app/services/service.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [
  ]
})
export class AccountSettingsComponent implements OnInit {

  constructor( @Inject(DOCUMENT) private _document,
               public _ajustes: SettingsService ) { }

  ngOnInit(): void {
    this.colocarCheck();
  }

  cambiarColor(tema: string, link: any) {

    this.aplicarCheck(link);
    this._ajustes.aplicarTema( tema );

  }

  aplicarCheck(link: any){

    let selectores: any = this._document.getElementsByClassName('selector');

    for (const selector of selectores) {
      selector.classList.remove('working');
    }

    link.classList.add('working');
    
  }

  colocarCheck(){

    let selectores: any = this._document.getElementsByClassName('selector');
    let tema = this._ajustes.ajustes.tema;

    for (const ref of selectores) {
      if( ref.getAttribute('data-theme') === tema ){
        ref.classList.add('working');
        break;
      }
    }
  }

}
