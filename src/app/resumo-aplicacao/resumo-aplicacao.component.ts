import { Component, OnInit } from '@angular/core';
import { AplicacaoApi, Aplicacao } from '../shared/sdk';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ParamMap } from '@angular/router';

@Component({
  selector: 'app-resumo-aplicacao',
  templateUrl: './resumo-aplicacao.component.html',
  styleUrls: ['./resumo-aplicacao.component.scss']
})
export class ResumoAplicacaoComponent implements OnInit {

  consulta = {"include" : ["projeto","itemValidacaoPaginas"] };

  aplicacao: Aplicacao;

  constructor(private route: ActivatedRoute, private aplicacaoSrv: AplicacaoApi) { }

  ngOnInit() {
    this.carregaAplicacao();
  }

  carregaAplicacao() {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.aplicacaoSrv.getProjetoMySql(params.get('id'))
      )).subscribe((result: Aplicacao) => {
        console.log('Aplicacao: ' + result);
        this.aplicacao = result;
      })
  }

}
