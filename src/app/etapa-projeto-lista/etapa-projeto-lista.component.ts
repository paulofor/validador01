import { Component, OnInit } from '@angular/core';
import { EtapaProjetoApi, EtapaProjeto } from '../shared/sdk';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { EtapaProjetoEditaComponent } from '../etapa-projeto-edita/etapa-projeto-edita.component';
import { AssociaProcessoEtapaComponent } from '../associa-processo-etapa/associa-processo-etapa.component';

@Component({
  selector: 'app-etapa-projeto-lista',
  templateUrl: './etapa-projeto-lista.component.html',
  styleUrls: ['./etapa-projeto-lista.component.scss']
})
export class EtapaProjetoListaComponent implements OnInit {

  lista: EtapaProjeto[];
  errMess: string;

  constructor(private servico: EtapaProjetoApi,
              private router: Router, private dialog: MatDialog) { 
  }

  ngOnInit() {
   this.atualizaLista();
  }

  atualizaLista() {
    this.servico.find({"order" : "ordenacao"})
    .subscribe((resultado: EtapaProjeto[]) => 
      this.lista = resultado
     );
  }

  openDialog(item?) {
    this.dialog.afterAllClosed.subscribe(result => {
      console.log('Dialog result: ${result}');
      this.atualizaLista();
    });
    this.dialog.open(EtapaProjetoEditaComponent, {
      width: '800px',
      data: {
        item: item
      }
    });
  }

  editaProcesso(item?) {
    this.dialog.afterAllClosed.subscribe(result => {
      console.log('Dialog result: ${result}');
      this.atualizaLista();
    });
    this.dialog.open(AssociaProcessoEtapaComponent, {
      width: '800px',
      data: {
        item: item
      }
    });
  }


  getAtivoClasse(item) {
    if (item.ativo==1) return "colunaAtivo";
    else return "colunaInativo";
  }

}
