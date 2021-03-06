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

  ano : number;
  anoAnterior : number;

  valorTotal: number;
  valorTotalAnterior : number;

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
