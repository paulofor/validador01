import { Component, OnInit } from '@angular/core';
import { ProjetoCanvasMySql, ProjetoCanvasMySqlApi, ItemValidacaoPagina } from '../shared/sdk';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-detalhe-valor',
  templateUrl: './detalhe-valor.component.html',
  styleUrls: ['./detalhe-valor.component.scss']
})
export class DetalheValorComponent implements OnInit {

  itemValor: ProjetoCanvasMySql;
  signo: ItemValidacaoPagina;

  constructor(private itemSrv: ProjetoCanvasMySqlApi,private route: ActivatedRoute) { }

  ngOnInit() {
    this.signo = new ItemValidacaoPagina();
    this.carregaItemValor();
  }


  carregaItemValor() {
    this.route.params.subscribe((params: Params) => {
      let id = params['id'];
      console.log('Id: ', id);
      this.itemSrv.findById(id,{"include":"projeto"})
        .subscribe((valor: ProjetoCanvasMySql) => {
          console.log('Item: ' + JSON.stringify(valor));
          this.itemValor = valor;
        })
    });
  }

}
