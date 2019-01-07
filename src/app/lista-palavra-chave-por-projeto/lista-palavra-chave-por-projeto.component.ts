import { Component, OnInit, Input } from '@angular/core';
import { ProjetoMySql, PalavraChaveEstatistica, PalavraChaveEstatisticaApi } from '../shared/sdk';

@Component({
  selector: 'app-lista-palavra-chave-por-projeto',
  templateUrl: './lista-palavra-chave-por-projeto.component.html',
  styleUrls: ['./lista-palavra-chave-por-projeto.component.scss']
})
export class ListaPalavraChavePorProjetoComponent implements OnInit {


  @Input() projeto: ProjetoMySql;
  lista:PalavraChaveEstatistica[];
  
  constructor(private srvPalavraChave: PalavraChaveEstatisticaApi) { }

  ngOnInit() {
    this.carregaPalavraChave()
  }

  carregaPalavraChave() {
    this.srvPalavraChave.ListaPorIdProjeto(this.projeto.id)
      .subscribe((result:PalavraChaveEstatistica[]) => {
        this.lista = result;
      })
  }

}
