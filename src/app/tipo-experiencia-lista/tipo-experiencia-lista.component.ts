import { Component, OnInit } from '@angular/core';
import { TipoExperiencia, TipoExperienciaApi } from '../shared/sdk';
import { Router } from '@angular/router';
import { TipoExperienciaEditaComponent } from '../tipo-experiencia-edita/tipo-experiencia-edita.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-tipo-experiencia-lista',
  templateUrl: './tipo-experiencia-lista.component.html',
  styleUrls: ['./tipo-experiencia-lista.component.scss']
})
export class TipoExperienciaListaComponent implements OnInit {

  lista: TipoExperiencia[];
  errMess: string;

  constructor(private servico: TipoExperienciaApi,
              private router: Router, private dialog: MatDialog) { 
  }

  ngOnInit() {
   this.atualizaLista();
  }

  atualizaLista() {
    this.servico.find()
    .subscribe((resultado: TipoExperiencia[]) => 
      this.lista = resultado
     );
  }

  openDialog(item?) {
    this.dialog.afterAllClosed.subscribe(result => {
      console.log('Dialog result: ${result}');
      this.atualizaLista();
    });
    this.dialog.open(TipoExperienciaEditaComponent, {
      width: '800px',
      data: {
        item: item
      }
    });
  }
}
