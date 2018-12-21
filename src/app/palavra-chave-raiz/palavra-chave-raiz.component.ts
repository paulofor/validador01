import { Component, OnInit } from '@angular/core';
import { PalavraChaveRaiz, PalavraChaveRaizApi } from '../shared/sdk';
import { MatDialog } from '@angular/material';
import { PalavraChaveRaizCriaEditaComponent } from '../palavra-chave-raiz-cria-edita/palavra-chave-raiz-cria-edita.component';

@Component({
  selector: 'app-palavra-chave-raiz',
  templateUrl: './palavra-chave-raiz.component.html',
  styleUrls: ['./palavra-chave-raiz.component.scss']
})
export class PalavraChaveRaizComponent implements OnInit {

  lista: PalavraChaveRaiz[];
  errMess: string;

  constructor(private srv: PalavraChaveRaizApi, private dialog: MatDialog) {

  }

  ngOnInit() {
    this.atualizaLista();
  }

  atualizaLista() {
    this.srv.find({"order" : "palavra"})
      .subscribe((result: PalavraChaveRaiz[]) =>
        this.lista = result
      );
  }


  openDialog() {
    this.dialog.afterAllClosed.subscribe(result => {
      console.log('Dialog result: ${result}');
      this.atualizaLista();
    });
    this.dialog.open(PalavraChaveRaizCriaEditaComponent, {
      width: '800px',
      data: {
        //aplicacao: this.aplicacao
      }
    });
  }



}
