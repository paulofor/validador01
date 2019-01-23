import { Component, OnInit } from '@angular/core';
import { CampanhaAds, CampanhaAdsApi } from '../shared/sdk';
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

  constructor(private route: ActivatedRoute, private srv: CampanhaAdsApi,  private dialog: MatDialog) { }

  ngOnInit() {
    this.carregaLista();
  }

  carregaLista() {
    this.route.params.subscribe((param: Params) => {
      this.idProjeto = param['id'];
      this.srv.GeralPorProjeto(this.idProjeto)
        .subscribe((resultado: CampanhaAds[]) => {
          this.listaCampanha = resultado;
        })
    })
  }




  openDialog(campanha) {
    this.dialog.afterAllClosed.subscribe(result => {
      this.carregaLista();
    });
    this.dialog.open(CampanhaEditaCriaV2Component, {
      width: '800px',
      data: {
        idProjeto: this.idProjeto,
        campanha: campanha
      }
    });
  }
}
