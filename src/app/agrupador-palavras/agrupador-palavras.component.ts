import { Component, OnInit, Input } from '@angular/core';
import { ProjetoMySql, ProjetoMySqlApi, PalavraGoogleProjetoApi, PalavraChaveEstatisticaApi } from '../shared/sdk';
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
  
  idProjeto : number;
  listaPalavra : PalavraChaveEstatistica[];

  
  constructor(private servico: ProjetoMySqlApi,
    private srvPalavra: PalavraGoogleProjetoApi, private srvLista: PalavraChaveEstatisticaApi) {
  }

  carregaListaProjeto() {
    this.servico.ListaPorCodigoProcesso('IDEAB')
      .subscribe((resultado: ProjetoMySql[]) => {
        console.log('Lista de Projeto: ', resultado);
        this.listaProjeto = resultado;
      })
  }

  selecionado(evento) {
    console.log('Item Selecionado(Projeto):', evento);
    this.idProjeto = evento;
    this.carregaPalavras();
  }

  @Input()
  set palavraNova(item: PalavraChaveEstatistica) {
    console.log('Recebeu palavra', item);
    if (item)
      this.criaRelacionamento(item.palavraChaveGoogleId);
  }

  criaRelacionamento(palavraStr) {
    if (!this.idProjeto) {
      console.log('Nao tem projeto:');
      return;
    }
    let palavraNova = new PalavraGoogleProjeto();
    palavraNova.palavraChaveGoogleId = palavraStr;
    palavraNova.projetoMySqlId = this.idProjeto;
    console.log('Vai inserir relacionamento: ', palavraNova);
    this.srvPalavra.CriaRelacionamento(palavraNova)
      .subscribe((resultado) => {
        console.log('Resultado:', resultado);
        this.carregaPalavras();
      });
  }

  carregaPalavras() {
    this.srvLista.ListaPorIdProjeto(this.idProjeto)
      .subscribe((resultado) => {
        this.listaPalavra = resultado;
        console.log('Lista Palavra: ' , this.listaPalavra);
      })

  }

  ngOnInit() {
    this.carregaListaProjeto();
  }

  mostraNome(projeto: ProjetoMySql): string {
    return (projeto ? projeto.nome : '');
  }

  excluiItem(item: PalavraChaveEstatistica) {
    console.log('Remover: ' , this.idProjeto , ' - ' , item.palavraChaveGoogleId);
    this.srvPalavra.RemoveRelacaoPalavra(this.idProjeto, item.palavraChaveGoogleId)
      .subscribe((resultado) => {
        this.carregaPalavras();
      })
  }
}
