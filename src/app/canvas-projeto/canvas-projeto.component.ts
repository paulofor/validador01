import { Component, OnInit } from '@angular/core';

import { ProjetoMySql } from '../shared/sdk/models';
import { ProjetoMySqlApi } from '../shared/sdk/services/custom/ProjetoMySql';
import { ProjetoCanvasMySql } from '../shared/sdk/models';
import { ProjetoCanvasMySqlApi } from '../shared/sdk/services/custom/ProjetoCanvasMySql';



import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';

import { ProjetoCanvasEditaComponent } from '../projeto-canvas-edita/projeto-canvas-edita.component';
import { ProjetoCanvasCriaComponent } from '../projeto-canvas-cria/projeto-canvas-cria.component';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { BASE_URL, API_VERSION } from '../constantes/base.url';
import { LoopBackConfig } from '../shared/sdk/';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-canvas-projeto',
  templateUrl: './canvas-projeto.component.html',
  styleUrls: ['./canvas-projeto.component.scss']
})
export class CanvasProjetoComponent implements OnInit {

  itensCanvas: ProjetoCanvasMySql[];
  projeto: ProjetoMySql;
  errMess: string;

  parceiros: ProjetoCanvasMySql[] = [];
  segmentos: ProjetoCanvasMySql[] = [];
  valores: ProjetoCanvasMySql[] = [];
  receitas: ProjetoCanvasMySql[] = [];
  atividades: ProjetoCanvasMySql[] = [];
  recursos: ProjetoCanvasMySql[] = [];
  relacionamentos: ProjetoCanvasMySql[];
  canais: ProjetoCanvasMySql[] = [];
  custos: ProjetoCanvasMySql[] = [];



  constructor(private dialog: MatDialog, private projetoService: ProjetoMySqlApi,
    private route: ActivatedRoute) {

  }

  ngOnInit() {
    console.log('CanvasProjetoComponent');
    LoopBackConfig.setBaseURL(BASE_URL);
    LoopBackConfig.setApiVersion(API_VERSION);

    this.carregaDados();

  }

  openDialog(tipoArea) {
    console.log('Tipo:', tipoArea);
    this.dialog.afterAllClosed.subscribe(result => {
      console.log(`Dialog result: ${result}`); 
      this.carregaDados();
    });
    this.dialog.open(ProjetoCanvasCriaComponent, {
      width: '600px',
      data: {
        projeto: this.projeto,
        tipo: tipoArea
      }
    });
  }

  editaItem(projetoCanvas) {
    console.log('ID Edicao: ' + JSON.stringify(projetoCanvas));
    this.dialog.open(ProjetoCanvasEditaComponent, {
      width: '600px',
      data: {
        projeto: this.projeto,
        edicao: projetoCanvas
      }
    });
  }

  carregaDados() {
    this.route.params.subscribe((params: Params) => {
      let userId = params['id'];
      console.log('Id: ', userId);
      this.projetoService.findById(userId)
        .subscribe((valor: ProjetoMySql) => {
          console.log('Item: ' + JSON.stringify(valor));
          this.projeto = valor;
          this.carregaCanvas();
        })
    });
  }

  carregaCanvas() {
    this.projetoService.getProjetoCanvasMySqls(this.projeto.id)
      .subscribe((valor: ProjetoCanvasMySql[]) => {
        console.log('Lista: ' + JSON.stringify(valor));
        this.itensCanvas = valor;
        this.distribuiItensCanvas();
      })

  }


  distribuiItensCanvas() {
    this.parceiros = this.itensCanvas.filter(
      item => item.tipo === 'PARCEIRO');
    this.segmentos = this.itensCanvas.filter(
      item => item.tipo === 'SEGMENTO');
    this.valores = this.itensCanvas.filter(
      item => item.tipo === 'VALOR');
    this.receitas = this.itensCanvas.filter(
      item => item.tipo === 'RECEITA');
    this.atividades = this.itensCanvas.filter(
      item => item.tipo === 'ATIVIDADE');
    this.recursos = this.itensCanvas.filter(
      item => item.tipo === 'RECURSO');
    this.relacionamentos = this.itensCanvas.filter(
      item => item.tipo === 'RELACIONAMENTO');
    this.canais = this.itensCanvas.filter(
      item => item.tipo === 'CANAL');
    this.custos = this.itensCanvas.filter(
      item => item.tipo === 'CUSTO');
  }

}
