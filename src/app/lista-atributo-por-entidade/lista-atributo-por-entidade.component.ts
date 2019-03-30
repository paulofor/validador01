import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { Entidade, EntidadeApi, Atributo_entidade } from '../shared/sdk';
import { EditaAtributoEntidadeComponent } from '../edita-atributo-entidade/edita-atributo-entidade.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-lista-atributo-por-entidade',
  templateUrl: './lista-atributo-por-entidade.component.html',
  styleUrls: ['./lista-atributo-por-entidade.component.scss']
})
export class ListaAtributoPorEntidadeComponent implements OnChanges, OnInit {


  columnsToDisplay = ['nome'];

  @Input() entidade: Entidade; 

  constructor(private srv:EntidadeApi, private dialog: MatDialog) { }

  ngOnChanges(changes: SimpleChanges) {
    console.log('Mudou Atributos');
    this.carregaAtributos();
  }

  ngOnInit() {
    this.carregaAtributos();
  }

  carregaAtributos() {
    this.srv.getAtributoEntidades(this.entidade.id_entidade)
      .subscribe((result:Atributo_entidade[]) => {
        console.log('result:' , result);
        this.entidade.atributoEntidades = result;
      })
  }

  novoAtributo() {
    console.log("Item:", this.entidade);
    this.dialog.afterAllClosed.subscribe(result => {
      console.log('Dialog result: ${result}');
      this.carregaAtributos();
    });
    this.dialog.open(EditaAtributoEntidadeComponent, {
      width: '800px',
      data: {
        entidade: this.entidade
      }
    });
  }

  alteraAtributo(item) {
    console.log("Item:", this.entidade);
    this.dialog.afterAllClosed.subscribe(result => {
      console.log('Dialog result: ${result}');
      this.carregaAtributos();
    });
    this.dialog.open(EditaAtributoEntidadeComponent, {
      width: '800px',
      data: {
        entidade: this.entidade,
        atributo: item
      }
    });
  }

}
