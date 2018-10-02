import { Component, OnInit, Input } from '@angular/core';
import { Entidade, EntidadeApi, Atributo_entidade } from '../shared/sdk';

@Component({
  selector: 'app-lista-atributo-por-entidade',
  templateUrl: './lista-atributo-por-entidade.component.html',
  styleUrls: ['./lista-atributo-por-entidade.component.scss']
})
export class ListaAtributoPorEntidadeComponent implements OnInit {



  @Input() entidade: Entidade; 

  constructor(private srv:EntidadeApi) { }

  ngOnInit() {
    this.carregaAtributos();
  }

  carregaAtributos() {
    this.srv.getAtributoEntidades(this.entidade.id_entidade)
      .subscribe((result:Atributo_entidade[]) => {
        this.entidade.atributoEntidades = result;
      })
  }

}
