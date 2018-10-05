import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Entidade, EntidadeApi, Relacionamento_entidade, AplicacaoApi } from '../shared/sdk';
import { MatDialog } from '@angular/material';
import { EditaRelacionamentoEntidadeComponent } from '../edita-relacionamento-entidade/edita-relacionamento-entidade.component';
import { EditaAtributoEntidadeComponent } from '../edita-atributo-entidade/edita-atributo-entidade.component';

@Component({
  selector: 'app-lista-relacionamento-por-entidade',
  templateUrl: './lista-relacionamento-por-entidade.component.html',
  styleUrls: ['./lista-relacionamento-por-entidade.component.scss']
})
export class ListaRelacionamentoPorEntidadeComponent implements OnInit {

  @Input() entidade: Entidade; 
  

  constructor(private srv:EntidadeApi, private dialog: MatDialog, private aplicacaoSrv: AplicacaoApi) { }

  ngOnInit() {
    this.carregaRelacionamentos();
  }


  carregaRelacionamentos() {
    this.srv.listaCompletaRelacionemnto(this.entidade.id_entidade)
      .subscribe((result:Relacionamento_entidade[]) => {
        console.log('result:' , result);
        this.entidade.rel1 = result;
      })
  }

  novoItem() {
    console.log("Item:", this.entidade);
    this.dialog.afterAllClosed.subscribe(result => {
      console.log('Dialog result: ${result}');
      this.carregaRelacionamentos();
    });
    this.dialog.open(EditaRelacionamentoEntidadeComponent, {
      width: '800px',
      data: {
        entidade: this.entidade
      }
    });
  }

  alteraItem(item) {
    console.log("Item:", this.entidade);
    this.dialog.afterAllClosed.subscribe(result => {
      console.log('Dialog result: ${result}');
      this.carregaRelacionamentos();
    });
    this.dialog.open(EditaRelacionamentoEntidadeComponent, {
      width: '800px',
      data: {
        entidade: this.entidade,
        item: item
      }
    });
  }

}
