import { Component, OnInit, Input } from '@angular/core';
import { ProjetoMySql, ProjetoMySqlApi, GanhoDorCanvasMySql } from '../shared/sdk';

@Component({
  selector: 'app-dor-ganho-palavra-chave',
  templateUrl: './dor-ganho-palavra-chave.component.html',
  styleUrls: ['./dor-ganho-palavra-chave.component.scss']
})
export class DorGanhoPalavraChaveComponent implements OnInit {


  @Input() projeto: ProjetoMySql; 

  consulta = { "where": {"or": [{"tipo": "GANHO"}, {"tipo": "DOR"}]}};

  listaItens : GanhoDorCanvasMySql[];

  constructor(private servico: ProjetoMySqlApi) { }

  ngOnInit() {
    this.carregaItens();
  }

  
  carregaItens() {
      this.servico.getGanhoDorCanvasMySqls(this.projeto.id,this.consulta)
        .subscribe((result : GanhoDorCanvasMySql[]) => {
          console.log("Resultado", result);
          this.listaItens = result;
        })
  }

}
