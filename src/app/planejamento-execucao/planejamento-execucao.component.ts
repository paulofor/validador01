import { Component, OnInit } from '@angular/core';
import { Semana, SemanaApi, Contexto, ContextoApi } from '../shared/sdk';
import { ActivatedRoute } from '@angular/router';
import { Params } from '@angular/router';


@Component({
  selector: 'app-planejamento-execucao',
  templateUrl: './planejamento-execucao.component.html',
  styleUrls: ['./planejamento-execucao.component.scss']
})
export class PlanejamentoExecucaoComponent implements OnInit {

  semana : Semana;
  semanaAtual : Semana;
  semanaAnterior: Semana;
  contexto: Contexto;
  

  constructor(private srv: SemanaApi, private route: ActivatedRoute, private srvContexto: ContextoApi) { }

  ngOnInit() {
    this.carregaContexto();
    this.carregaSemana();
  }


  carregaContexto() {
    this.route.params.subscribe((params: Params) => {
      let id  = params['id'];
      this.srvContexto.findById(id)
        .subscribe((valor: Contexto) => {
          this.contexto = valor;
        })
    });

  }

  carregaSemana() {
    this.srv.ObtemDeslocada(1)
      .subscribe((resultado) => {
        this.semana = resultado;
        console.log('Proxima: ' , resultado);
      });
    this.srv.ObtemDeslocada(0)
      .subscribe((resultado) => {
        this.semanaAtual = resultado;
        console.log('Atual: ' , resultado);
      });
    this.srv.ObtemDeslocada(-1)
      .subscribe((resultado) => {
        this.semanaAnterior = resultado;
        console.log('Atual: ' , resultado);
      });
  }
}
