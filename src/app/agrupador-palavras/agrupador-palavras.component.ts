import { Component, OnInit, Input } from '@angular/core';
import { ProjetoMySql, ProjetoMySqlApi, PalavraGoogleProjetoApi } from '../shared/sdk';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { PalavraGoogleProjeto, PalavraChaveEstatistica } from '../shared/sdk/models';
import { startWith, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-agrupador-palavras',
  templateUrl: './agrupador-palavras.component.html',
  styleUrls: ['./agrupador-palavras.component.scss']
})
export class AgrupadorPalavrasComponent implements OnInit {

  listaProjeto: ProjetoMySql[];

  myControl = new FormControl();

  filteredOptions: Observable<string[]>;
  palavra: string;

  projeto: ProjetoMySql;

  palavraProjeto: PalavraGoogleProjeto;

  lista = [{"nome" : "valor1" }, {"nome" : "valor2"}];

  projetoSelecionado: ProjetoMySql;
  constructor(private servico: ProjetoMySqlApi,
    private srvPalavra: PalavraGoogleProjetoApi) {
  }

  carregaListaProjeto() {
    this.servico.ListaIdeiaBaseComPalavras()
      .subscribe((resultado:ProjetoMySql[]) => {
        console.log('Lista de Projeto: ' , resultado);
        this.listaProjeto = resultado;
      })
  }

  selecionado(evento) {
    console.log('Item Selecionado(Projeto):' , evento);
  }

  @Input()
  set palavraNova(item: PalavraChaveEstatistica) {
    console.log('Mudou=' , item);
  }
 
  ngOnInit() {
    this.carregaListaProjeto();
    this.projeto = new ProjetoMySql();
    this.palavraProjeto = new PalavraGoogleProjeto();

    this.filteredOptions = this.myControl.valueChanges
      .pipe(
      startWith(' '),
      switchMap(value => this.servico.PesquisaPorTrecho(value))
      );
  }

  mostraNome(projeto: ProjetoMySql): string {
    return (projeto?projeto.nome:'');
  }

  setProjeto(objeto) {
    this.projetoSelecionado = (objeto ? objeto:null );
  }

  setPalavra(item) {
    console.log('Evento palavra: ' , item);
  }
}
