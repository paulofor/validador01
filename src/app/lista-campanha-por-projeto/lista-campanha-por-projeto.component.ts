import { Component, OnInit } from '@angular/core';
import { CampanhaAds, CampanhaAdsApi, ProjetoMySql, ProjetoMySqlApi } from '../shared/sdk';
import { Params, ActivatedRoute } from '@angular/router';
import { CampanhaEditaCriaV2Component } from '../campanha-edita-cria-v2/campanha-edita-cria-v2.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-lista-campanha-por-projeto',
  templateUrl: './lista-campanha-por-projeto.component.html',
  styleUrls: ['./lista-campanha-por-projeto.component.scss']
})
export class ListaCampanhaPorProjetoComponent implements OnInit {

  listaCampanha: CampanhaAds[];
  idProjeto : number;
  projeto : ProjetoMySql;

  constructor(private route: ActivatedRoute, private srv: CampanhaAdsApi,  
              private srvProjeto: ProjetoMySqlApi, private dialog: MatDialog) { }

  ngOnInit() {
    this.carregaLista();
  }

  carregaLista() {
    this.route.params.subscribe((param: Params) => {
      this.idProjeto = param['id'];
      this.srv.GeralPorProjeto(this.idProjeto)
        .subscribe((resultado: CampanhaAds[]) => {
          this.listaCampanha = resultado;
        });
      this.srvProjeto.findById(this.idProjeto)
        .subscribe((resultado: ProjetoMySql) => {
          this.projeto = resultado;
        })
    })
  }


  atualizaInstalacoes() {
    this.srv.AtualizaInstalacao()
      .subscribe((resultado) => {
        this.carregaLista();
      })
  }



  openDialog(campanha) {
    this.dialog.afterAllClosed.subscribe(result => {
      this.carregaLista();
    });
    this.dialog.open(CampanhaEditaCriaV2Component, {
      width: '800px',
      maxHeight: '550px', 
      data: {
        idProjeto: this.idProjeto,
        campanha: campanha
      }
    });
  }
}
