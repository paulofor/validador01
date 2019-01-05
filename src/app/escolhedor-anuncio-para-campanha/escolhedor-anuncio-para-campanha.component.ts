import { Component, OnInit, Inject } from '@angular/core';
import { AnuncioAds, CampanhaAds, AnuncioAdsApi, CampanhaAnuncioResultado, CampanhaAnuncioResultadoApi } from '../shared/sdk';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DropEvent } from 'ng-drag-drop';

@Component({
  selector: 'app-escolhedor-anuncio-para-campanha',
  templateUrl: './escolhedor-anuncio-para-campanha.component.html',
  styleUrls: ['./escolhedor-anuncio-para-campanha.component.scss']
})
export class EscolhedorAnuncioParaCampanhaComponent implements OnInit {

  consulta = { "where": { "tipo": "VALOR" }, "include": { "relation": "itemValidacaoPaginas" } };
  listaItemDisponivel: AnuncioAds[] = new Array(0);

  //droppedItems: ItemValidacaoPagina[] = new Array(0);
  campanha: CampanhaAds;

  constructor(public dialogRef: MatDialogRef<EscolhedorAnuncioParaCampanhaComponent>
    , @Inject(MAT_DIALOG_DATA) public data: any,
    private anuncioSrv: AnuncioAdsApi, private relSrv : CampanhaAnuncioResultadoApi) {
  }

  ngOnInit() {
    this.carregaListaValor();
  }

  carregaListaValor() {
    
    this.campanha = this.data.campanha;
    this.anuncioSrv.DisponiveisPorIdCampanha(this.campanha.id)
      .subscribe((listaItens: any) => {
        console.log("ListaItens" , listaItens);
        this.listaItemDisponivel = listaItens;
      })
  }


 

  onDrop(e: DropEvent) {
    console.log('onDrop:', e.dragData);
    let item = <AnuncioAds>e.dragData;
    console.log('Data:', this.data);
    let relNovo = new CampanhaAnuncioResultado();
    relNovo.anuncioAdsId = item.id;
    relNovo.campanhaAdsId = this.campanha.id;

    this.relSrv.create(relNovo)
      .subscribe((result: CampanhaAnuncioResultado) => {
        console.log('Resultado: ', result);
        result.anuncioAds = e.dragData;
        this.campanha.campanhaAnuncioResultados.push(result);
        this.removeItem(e.dragData, this.listaItemDisponivel)
      })

  }

  removeItem(item: any, list: Array<any>) {
    let index = list.map(function (e) {
      return e.name
    }).indexOf(item.name);
    list.splice(index, 1);
  }

}
