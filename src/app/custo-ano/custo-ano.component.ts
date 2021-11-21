import { Component, OnInit } from '@angular/core';
import { CustoMes, CustoMesApi } from '../shared/sdk';
import { ActivatedRoute } from '@angular/router';
import { Params } from '@angular/router';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-custo-ano',
  templateUrl: './custo-ano.component.html',
  styleUrls: ['./custo-ano.component.scss']
})
export class CustoAnoComponent implements OnInit {


  listaCusto: CustoMes[];
  listaCustoAnterior: CustoMes[];
  listaCustoAnterior2 : CustoMes[];

  ano : number;
  anoAnterior : number;
  anoAnterior2 : number;

  valorTotal: number;
  valorTotalAnterior : number;
  valorTotalAnterior2 : number;

  constructor(private route: ActivatedRoute, private servico: CustoMesApi, private dialog: MatDialog) { }

  ngOnInit() {
    this.carregaCustoMes();

  }


  carregaCustoMes() {
    this.route.params.subscribe((params: Params[]) => {
      this.ano = params['id'];
      let filtro = {}
      this.servico.find({"where":{"and":[{"ano":this.ano},{"mes":{ "neq": null }},{"projetoMySqlId": null }]},"order":"mes"} )
        .subscribe((result: CustoMes[]) => {
          console.log("Result - CustoAnoComponent: ", JSON.stringify(result));
          this.listaCusto = result;
          this.calculaValorTotal();
        });
      this.anoAnterior = this.ano - 1;
      this.servico.find({"where":{"and":[{"ano":this.anoAnterior},{"mes":{ "neq": null }},{"projetoMySqlId": null }]},"order":"mes"} )
      .subscribe((result: CustoMes[]) => {
        console.log("Result - CustoAnoAnteriorComponent: ", JSON.stringify(result));
        this.listaCustoAnterior = result;
        this.calculaValorTotalAnterior();
      });
      this.anoAnterior2 = this.ano - 2;
      this.servico.find({"where":{"and":[{"ano":this.anoAnterior2},{"mes":{ "neq": null }},{"projetoMySqlId": null }]},"order":"mes"} )
      .subscribe((result: CustoMes[]) => {
        console.log("Result - CustoAnoAnteriorComponent: ", JSON.stringify(result));
        this.listaCustoAnterior2 = result;
        this.calculaValorTotalAnterior2();
      });
    })
  }

  atualizaMes(mes:number) {
    this.servico.AtualizaCustoMes(mes,this.ano)
      .subscribe((result) => {
        this.carregaCustoMes();
      });
  }

  calculaValorTotal() {
    this.valorTotal = 0;
    for (var i=0; i < this.listaCusto.length; i++) {
      var item = this.listaCusto[i];
      this.valorTotal += item.valorCampanha;
    }
    console.log('Total:' , this.valorTotal);
  }
  calculaValorTotalAnterior() {
    this.valorTotalAnterior = 0;
    for (var i=0; i < this.listaCustoAnterior.length; i++) {
      var item = this.listaCustoAnterior[i];
      this.valorTotalAnterior += item.valorCampanha;
    }
    console.log('TotalAnterior:' , this.valorTotalAnterior);
  }
  calculaValorTotalAnterior2() {
    this.valorTotalAnterior2 = 0;
    for (var i=0; i < this.listaCustoAnterior2.length; i++) {
      var item = this.listaCustoAnterior2[i];
      this.valorTotalAnterior2 += item.valorCampanha;
    }
    console.log('TotalAnterior2:' , this.valorTotalAnterior2);
  }
  /*
  openDialog(item?) {
    if (!item) {
      item = new ItemValorApp();
      item.projetoMySqlId = this.projeto.id;
    }
    this.dialog.afterAllClosed.subscribe(result => {
      this.carregaProjeto();
    });
    this.dialog.open(EditaItemValorPorProjetoComponent, {
      width: '800px',
      data: {
        item: item
      }
    });
  }
  */


}
