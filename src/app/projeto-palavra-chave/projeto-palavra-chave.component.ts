import { Component, OnInit } from '@angular/core';
import { ProjetoMySql, ProjetoMySqlApi } from '../shared/sdk';
import { MatDialog } from '@angular/material';
import { PalavraChaveAddProjetoComponent } from 'src/app/palavra-chave-add-projeto/palavra-chave-add-projeto.component';

@Component({
  selector: 'app-projeto-palavra-chave',
  templateUrl: './projeto-palavra-chave.component.html',
  styleUrls: ['./projeto-palavra-chave.component.scss']
})
export class ProjetoPalavraChaveComponent implements OnInit {

  projetos: ProjetoMySql[];
  errMess: string;

  constructor(private projetoService: ProjetoMySqlApi, private dialog: MatDialog) { }

  ngOnInit() {
    this.atualizaLista();
  }

  atualizaLista() {
    this.projetoService.ListaPorCodigoProcesso('IDEAB')
    .subscribe((projetos: ProjetoMySql[]) =>
      this.projetos = projetos
    );
  }

  openDialog(item?) {
    this.dialog.afterAllClosed.subscribe(result => {
      console.log('Dialog result: ${result}');
      this.atualizaLista();
    });
    this.dialog.open(PalavraChaveAddProjetoComponent, {
      width: '800px',
      data: {
        item: item
      }
    });
  }
}
