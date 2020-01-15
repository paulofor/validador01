import { Component, OnInit } from '@angular/core';
import { FunilNegocio, FunilNegocioApi } from '../shared/sdk';

@Component({
  selector: 'app-lista-etapa-funil',
  templateUrl: './lista-etapa-funil.component.html',
  styleUrls: ['./lista-etapa-funil.component.scss']
})
export class ListaEtapaFunilComponent implements OnInit {

  funil:FunilNegocio

  constructor(private srv:FunilNegocioApi) { }

  ngOnInit() {
  }

  openDialog(item?) {
    /*
    this.dialog.afterAllClosed.subscribe(result => {
      console.log('Dialog result: ${result}');
      this.carregaIndicador();
    });
    this.dialog.open(EditaIndicadorProdutoComponent, {
      width: '800px',
      data: {
        item: item
      }
    });
    */
  }

}
