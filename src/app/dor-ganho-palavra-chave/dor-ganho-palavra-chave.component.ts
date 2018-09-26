import { Component, OnInit, Input } from '@angular/core';
import { ProjetoMySql, ProjetoMySqlApi, GanhoDorCanvasMySql } from '../shared/sdk';
import { MatDialog } from '@angular/material';
import { PalavraChaveCriaComponent } from '../palavra-chave-cria/palavra-chave-cria.component';

@Component({
  selector: 'app-dor-ganho-palavra-chave',
  templateUrl: './dor-ganho-palavra-chave.component.html',
  styleUrls: ['./dor-ganho-palavra-chave.component.scss']
})
export class DorGanhoPalavraChaveComponent implements OnInit {

  panelOpenState: boolean = false;
  @Input() projeto: ProjetoMySql;

  consulta = { "include": "palavraChaveAds", "where": { "or": [{ "tipo": "GANHO" }, { "tipo": "DOR" }] } };

  listaItens: GanhoDorCanvasMySql[];

  constructor(private servico: ProjetoMySqlApi, private dialog: MatDialog) { }

  ngOnInit() {
    this.carregaItens();
  }


  carregaItens() {
    this.servico.getGanhoDorCanvasMySqls(this.projeto.id, this.consulta)
      .subscribe((result: GanhoDorCanvasMySql[]) => {
        console.log("Resultado", result);
        this.listaItens = result;
      })
  }

  novaPalavra(item: GanhoDorCanvasMySql) {
    console.log("Item:", item);
    this.dialog.afterAllClosed.subscribe(result => {
      console.log('Dialog result: ${result}');
      this.carregaItens();
    });
    this.dialog.open(PalavraChaveCriaComponent, {
      width: '800px',
      data: {
        itemValor: item
      }
    });
  }

}
