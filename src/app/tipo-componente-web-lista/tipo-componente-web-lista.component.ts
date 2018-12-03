import { Component, OnInit } from '@angular/core';
import { TipoComponenteWeb, TipoComponenteWebApi } from '../shared/sdk';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { TipoComponenteWebEditaComponent } from '../tipo-componente-web-edita/tipo-componente-web-edita.component';

@Component({
  selector: 'app-tipo-componente-web-lista',
  templateUrl: './tipo-componente-web-lista.component.html',
  styleUrls: ['./tipo-componente-web-lista.component.scss']
})
export class TipoComponenteWebListaComponent implements OnInit {

  lista: TipoComponenteWeb[];
  errMess: string;

  constructor(private servico: TipoComponenteWebApi,
              private router: Router, private dialog: MatDialog) { 
  }

  ngOnInit() {
   this.atualizaLista();
  }

  atualizaLista() {
    this.servico.find()
    .subscribe((resultado: TipoComponenteWeb[]) => 
      this.lista = resultado
     );
  }

  openDialog(item?) {
    this.dialog.afterAllClosed.subscribe(result => {
      console.log('Dialog result: ${result}');
      this.atualizaLista();
    });
    this.dialog.open(TipoComponenteWebEditaComponent, {
      width: '800px',
      data: {
        item: item
      }
    });
  }

}
