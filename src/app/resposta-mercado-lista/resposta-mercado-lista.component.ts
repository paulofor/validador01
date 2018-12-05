import { Component, OnInit } from '@angular/core';
import { RespostaMercado, RespostaMercadoApi } from '../shared/sdk';
import { RespostaMercadoEditaComponent } from '../resposta-mercado-edita/resposta-mercado-edita.component';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-resposta-mercado-lista',
  templateUrl: './resposta-mercado-lista.component.html',
  styleUrls: ['./resposta-mercado-lista.component.scss']
})
export class RespostaMercadoListaComponent implements OnInit {

  lista: RespostaMercado[];
  errMess: string;

  constructor(private servico: RespostaMercadoApi,
              private router: Router, private dialog: MatDialog) { 
  }

  ngOnInit() {
   this.atualizaLista();
  }

  atualizaLista() {
    this.servico.find({"order" : "ordenacao"})
    .subscribe((resultado: RespostaMercado[]) => 
      this.lista = resultado
     );
  }

  openDialog(item?) {
    this.dialog.afterAllClosed.subscribe(result => {
      console.log('Dialog result: ${result}');
      this.atualizaLista();
    });
    this.dialog.open(RespostaMercadoEditaComponent, {
      width: '800px',
      data: {
        item: item
      }
    });
  }


}
