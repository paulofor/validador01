import { Component, OnInit } from '@angular/core';
import { ProjetoMySql, ProjetoMySqlApi, DsUsuario, DsUsuarioApi } from '../shared/sdk';
import { DS_MES } from '../constantes/base.url';
import { Params, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-metrica-mes-produto',
  templateUrl: './metrica-mes-produto.component.html',
  styleUrls: ['./metrica-mes-produto.component.scss']
})
export class MetricaMesProdutoComponent implements OnInit {

  idProjeto;

  projeto: ProjetoMySql = null;
  nomeMes: string;
  numMes : number;
  numAno : number;

  proximoMes: number;
  proximoAno: number;
  anteriorMes: number;
  anteriorAno: number;

  constructor(private srv: ProjetoMySqlApi, private route: ActivatedRoute, private dsUsuario : DsUsuarioApi) { }


  ngOnInit() {
    this.carregaMes();
  }

  calculaDeslocamento() {
    this.proximoMes = this.numMes + 1;
    if (this.proximoMes == 13) {
      this.proximoMes = 1;
      this.proximoAno = this.numAno + 1;
    } else {
      this.proximoAno = this.numAno;
    }
    this.anteriorMes = this.numMes - 1;
    if (this.anteriorMes == 0) {
      this.anteriorMes = 12;
      this.anteriorAno = this.numAno - 1;
    } else {
      this.anteriorAno = this.numAno;
    }

  }

  atualiza() {
    this.dsUsuario.AtualizaPeriodo()
      .subscribe((result) => {
        this.carregaMes();
      })
  }


  carregaMes() {

    this.route.params.subscribe((params: Params) => {
      this.idProjeto = params['id'];
      this.numMes = Number(params['mes']);
      this.numAno = Number(params['ano']);
      this.nomeMes = DS_MES[this.numMes - 1];
      this.calculaDeslocamento();
      console.log('Mes: ' , this.nomeMes);
      let filtro = {
        "include": {
          "relation": "dsUsuarios", 
          "scope":
          {
            "where": {
              "and": [
                { "numMes": this.numMes },
                { "numAno": this.numAno }
              ]
            },
            "order": "dia"
          }
        }
      };

      this.srv.findById(this.idProjeto, filtro)
        .subscribe((resultado: ProjetoMySql) => {
          this.projeto = resultado;
        })


    })



  }

}
