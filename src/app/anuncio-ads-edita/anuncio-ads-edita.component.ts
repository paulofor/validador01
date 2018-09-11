import { Component, OnInit, Input } from '@angular/core';
import { ProjetoCanvasMySql, AnuncioAds, AnuncioAdsApi, ProjetoCanvasApi, ProjetoCanvasMySqlApi } from '../shared/sdk';
import { AnuncioAdsEditaBase } from './anuncio-ads-edita-base';


@Component({
  selector: 'app-anuncio-ads-edita',
  templateUrl: './anuncio-ads-edita.component.html',
  styleUrls: ['./anuncio-ads-edita.component.scss']
})
export class AnuncioAdsEditaComponent extends AnuncioAdsEditaBase implements OnInit {


  @Input() valor: ProjetoCanvasMySql;
  item: AnuncioAds;

  constructor(private srv:AnuncioAdsApi, private valorSrv: ProjetoCanvasMySqlApi) { super() }

  ngOnInit() {
    this.item = new AnuncioAds();
    this.carregaItem();
  }

  onSubmit() {
    console.log('Item(onSubmit):' , this.item);
    if (this.item.id) {
      this.atualizaItem();
    } else {
      this.insereItem();
    }
  }

  carregaItem() {
    console.log('ItemRaiz(carregaItem):',this.valor );
    this.valorSrv.findByIdAnuncioAds(this.valor.id)
  }

  insereItem() {
    console.log('Item(insereItem):' , this.item);
    this.item.projetoCanvasMySqlId = this.valor.id;
    console.log("Item: ", this.item);
    this.srv
      .create(this.item, (err, obj) => {
        console.log("Erro:" + err.message);
      }).subscribe((e: any) => {
        console.log(JSON.stringify(e));
      });
  }

  atualizaItem() {
    console.log('Item(atualizaItem):' , this.item);
    this.srv
      .updateAttributes(this.item.id, this.item, (err, obj) => {
        console.log("Erro:" + err.message);
      }).subscribe((e: any) => {
        console.log(JSON.stringify(e));
      });
  }


}
