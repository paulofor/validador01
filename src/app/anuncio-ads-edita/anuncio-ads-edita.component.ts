import { Component, OnInit, Input } from '@angular/core';
import { ProjetoCanvasMySql, AnuncioAds } from '../shared/sdk';
import { AnuncioAdsEditaBase } from './anuncio-ads-edita-base';


@Component({
  selector: 'app-anuncio-ads-edita',
  templateUrl: './anuncio-ads-edita.component.html',
  styleUrls: ['./anuncio-ads-edita.component.scss']
})
export class AnuncioAdsEditaComponent extends AnuncioAdsEditaBase implements OnInit {


  @Input() valor: ProjetoCanvasMySql;
  item: AnuncioAds;

  constructor() { super() }

  ngOnInit() {
    this.item = new AnuncioAds();
  }

}
