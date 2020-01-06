import { Component, OnInit } from '@angular/core';
import { PresencaLojaApi, PresencaLoja } from '../shared/sdk';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { PresencaLojaEditaComponent } from '../presenca-loja-edita/presenca-loja-edita.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-presenca-loja-lista',
  templateUrl: './presenca-loja-lista.component.html',
  styleUrls: ['./presenca-loja-lista.component.scss']
})
export class PresencaLojaListaComponent implements OnInit {


  listaPresenca: PresencaLoja[];
  idProjeto: number;

  constructor(private srv:PresencaLojaApi, private route: ActivatedRoute, private dialog: MatDialog) { }

  ngOnInit() {
    this.carregaPresencas();
  }

  carregaPresencas(){
    this.route.params.subscribe((params: Params) => {
      this.idProjeto = params['id'];
      this.srv.find({'where' : {'projetoMySqlId' : this.idProjeto }})
        .subscribe((result: PresencaLoja[]) => {
          this.listaPresenca = result;
        });
    })
  }

 
  openDialog(presenca? : PresencaLoja) {
    if (!presenca) {
      presenca = new PresencaLoja();
      presenca.projetoMySqlId = this.idProjeto;
    }
    this.dialog.afterAllClosed.subscribe(result => {
      this.carregaPresencas();
    });
    this.dialog.open(PresencaLojaEditaComponent, {
      width: '1000px',
      data: {
        item: presenca
      }
    });
  }

  atualizar() {
    this.srv.CalculaMetricaProjeto(this.idProjeto)
      .subscribe((result) => {
        this.carregaPresencas();
      })
  }

}
