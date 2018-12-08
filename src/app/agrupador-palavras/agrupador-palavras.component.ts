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
  palavra: string;
  projeto: ProjetoMySql;
  palavraProjeto: PalavraGoogleProjeto;
  projetoSelecionado: ProjetoMySql;



  constructor(private servico: ProjetoMySqlApi,
    private srvPalavra: PalavraGoogleProjetoApi) {
  }

  carregaListaProjeto() {
    this.servico.ListaIdeiaBaseComPalavras()
      .subscribe((resultado: ProjetoMySql[]) => {
        console.log('Lista de Projeto: ', resultado);
        this.listaProjeto = resultado;
      })
  }

  selecionado(evento) {
    console.log('Item Selecionado(Projeto):', evento.source.selected);
    this.projetoSelecionado = evento.source.selected;
    this.carregaPalavras();
  }

  @Input()
  set palavraNova(item: PalavraChaveEstatistica) {
    console.log('Recebeu palavra', item);
    if (item)
      this.criaRelacionamento(item.palavraChaveGoogleId);
  }

  criaRelacionamento(palavraStr) {
    if (!this.projetoSelecionado) {
      console.log('Nao tem projeto:');
      return;
    }
    let palavraNova = new PalavraGoogleProjeto();
    palavraNova.palavraChaveGoogleId = palavraStr;
    palavraNova.projetoMySqlId = this.projetoSelecionado.id;
    console.log('Vai inserir relacionamento: ', palavraNova);
    this.srvPalavra.create(palavraNova)
      .subscribe((resultado) => {
        console.log('Resultado:', resultado);
        this.carregaPalavras();
      });
  }

  carregaPalavras() {

  }


  ngOnInit() {
    this.carregaListaProjeto();
  }

  mostraNome(projeto: ProjetoMySql): string {
    return (projeto ? projeto.nome : '');
  }

  setProjeto(objeto) {
    this.projetoSelecionado = (objeto ? objeto : null);
  }

}
