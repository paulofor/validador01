import { Component, OnInit } from '@angular/core';
import { ProjetoMySql, ProjetoMySqlApi } from '../shared/sdk';
import { EditaAplicacaoComponent } from '../edita-aplicacao/edita-aplicacao.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-projeto-aplicacao',
  templateUrl: './projeto-aplicacao.component.html',
  styleUrls: ['./projeto-aplicacao.component.scss']
})
export class ProjetoAplicacaoComponent implements OnInit {

  projetos: ProjetoMySql[];
  errMess: string;

  constructor(private projetoService: ProjetoMySqlApi, private dialog: MatDialog) {

  }

  ngOnInit() {
    this.atualizaLista();
  }

  atualizaLista() {
    var filtro = {'include' : 'aplicacao'};
    this.projetoService.find()
      .subscribe((projetos: ProjetoMySql[]) =>
        this.projetos = projetos
      );
  }

  openDialog(aplicacao) {
    this.dialog.afterAllClosed.subscribe(result => {
      this.atualizaLista();
    });
    this.dialog.open(EditaAplicacaoComponent, {
      width: '800px',
      data: {
        aplicacao: aplicacao
      }
    });
  }


}
