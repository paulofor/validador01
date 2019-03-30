import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Input } from '@angular/core';
import { Entidade, EntidadeApi, Relacionamento_entidade, AplicacaoApi, Relacionamento_entidadeApi } from '../shared/sdk';
import { MatDialog } from '@angular/material';
import { EditaRelacionamentoEntidadeComponent } from '../edita-relacionamento-entidade/edita-relacionamento-entidade.component';
import { EditaAtributoEntidadeComponent } from '../edita-atributo-entidade/edita-atributo-entidade.component';

@Component({
  selector: 'app-lista-relacionamento-por-entidade',
  templateUrl: './lista-relacionamento-por-entidade.component.html',
  styleUrls: ['./lista-relacionamento-por-entidade.component.scss']
})
export class ListaRelacionamentoPorEntidadeComponent implements OnChanges, OnInit {

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Mudou Entrada');
    this.carregaRelacionamentos();
  }

  @Input() entidade: Entidade;


  constructor(private srv: Relacionamento_entidadeApi, private dialog: MatDialog) { }

  ngOnInit() {
    this.carregaRelacionamentos();
  }

  

  getNumeros(item: Relacionamento_entidade) {
    if (this.entidade.id_entidade == item.id_entidade1) {
      return item.qtde_entidade2 + ':' + item.qtde_entidade1;
    } else {
      return item.qtde_entidade1 + ':' + item.qtde_entidade2;
    }
  }



  getEntidadeOposta(item: Relacionamento_entidade) : Entidade{
    if (this.entidade.id_entidade == item.id_entidade1) {
      return item.entidade2;
    } else {
      return item.entidade1;
    }
  }

  getNome(item: Relacionamento_entidade) {
    if (this.entidade.id_entidade == item.id_entidade1) {
      return item.nome1;
    } else {
      return item.nome2;
    }
  }


  carregaRelacionamentos() {
    this.srv.listaCompletaPorEntidade(this.entidade.id_entidade)
      .subscribe((result: Relacionamento_entidade[]) => {
        console.log('listaCompleta:', result);
        this.entidade.rel1 = result;
      })
  }

  novoRel() {
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

  alteraRel(item) {
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
