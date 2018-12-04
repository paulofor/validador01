import { Component, OnInit } from '@angular/core';
import { ProjetoMySql, ProjetoMySqlApi, PalavraGoogleProjetoApi } from '../shared/sdk';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { PalavraGoogleProjeto } from '../shared/sdk/models';
import { startWith, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-agrupador-palavras',
  templateUrl: './agrupador-palavras.component.html',
  styleUrls: ['./agrupador-palavras.component.scss']
})
export class AgrupadorPalavrasComponent implements OnInit {


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

 
  ngOnInit() {
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
