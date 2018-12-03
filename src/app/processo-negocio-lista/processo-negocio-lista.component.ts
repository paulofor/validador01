import { Component, OnInit } from '@angular/core';
import { ProcessoNegocio, ProcessoNegocioApi } from '../shared/sdk';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { ProcessoNegocioEditaComponent } from '../processo-negocio-edita/processo-negocio-edita.component';

@Component({
  selector: 'app-processo-negocio-lista',
  templateUrl: './processo-negocio-lista.component.html',
  styleUrls: ['./processo-negocio-lista.component.scss']
})
export class ProcessoNegocioListaComponent implements OnInit {

  lista: ProcessoNegocio[];
  errMess: string;

  constructor(private servico: ProcessoNegocioApi,
              private router: Router, private dialog: MatDialog) { 
  }

  ngOnInit() {
   this.atualizaLista();
  }

  atualizaLista() {
    this.servico.find()
    .subscribe((resultado: ProcessoNegocio[]) => 
      this.lista = resultado
     );
  }

  openDialog(item?) {
    this.dialog.afterAllClosed.subscribe(result => {
      console.log('Dialog result: ${result}');
      this.atualizaLista();
    });
    this.dialog.open(ProcessoNegocioEditaComponent, {
      width: '800px',
      data: {
        item: item
      }
    });
  }

}
