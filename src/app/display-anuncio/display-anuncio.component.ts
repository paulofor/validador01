import { Component, OnInit, Input } from '@angular/core';
import { AnuncioAds } from '../shared/sdk';


@Component({
  selector: 'app-display-anuncio',
  templateUrl: './display-anuncio.component.html',
  styleUrls: ['./display-anuncio.component.scss']
})
export class DisplayAnuncioComponent implements OnInit {

  @Input() item: AnuncioAds;

  constructor() { }

  ngOnInit() {
    console.log('Anuncio-Display:' , this.item);
  }

}
