import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map, switchMap } from 'rxjs/operators';
import { ProjetoMySql, ProjetoMySqlApi, PalavraGoogleProjeto } from '../shared/sdk';
import { PalavraGoogleProjetoApi } from '../shared/sdk/services';

@Component({
  selector: 'app-alocacao-palavra-chave',
  templateUrl: './alocacao-palavra-chave.component.html',
  styleUrls: ['./alocacao-palavra-chave.component.scss']
})
export class AlocacaoPalavraChaveComponent implements OnInit {

  myControl = new FormControl();
  //options: string[] = ['Aplicativos', 'Teste 0001', 'Teste 002', 'novo teste'];
  filteredOptions: Observable<string[]>;
  palavra: string;

  projeto: ProjetoMySql;
  palavraProjeto: PalavraGoogleProjeto;

  projetoSelecionado: ProjetoMySql;

  constructor(public dialogRef: MatDialogRef<AlocacaoPalavraChaveComponent>
    , @Inject(MAT_DIALOG_DATA) public data: any, private servico: ProjetoMySqlApi,
    private srvPalavra: PalavraGoogleProjetoApi) {
  }

  /* Original 
  ngOnInit() {
    console.log('Data: ', JSON.stringify(this.data));
    console.log('Palavra:' , this.data.itemSelecionado.palavraChaveGoogleId);
    this.projeto = new ProjetoMySql();
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );

  }
  // função de retorna a lista
  private _filter(value: string): string[] {
    let saida: string[];
    const filterValue = value.toLowerCase();
    saida = this.options.filter(option => option.toLowerCase().includes(filterValue));
    return saida;
  }
  */

  ngOnInit() {
    this.palavraProjeto = new PalavraGoogleProjeto();
    this.palavra = this.data.itemSelecionado.palavraChaveGoogleId;
    this.projeto = new ProjetoMySql();
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
      startWith(' '),
      switchMap(value => this.servico.PesquisaPorTrecho(value))
      );
  }

  onSubmit() {
    console.log('Projeto: ' + JSON.stringify(this.projeto));
    this.palavraProjeto.palavraChaveGoogleId = this.data.itemSelecionado.palavraChaveGoogleId;
  }

  mostraNome(projeto: ProjetoMySql): string {
    return (projeto?projeto.nome:'');
  }

  setProjeto(projeto: ProjetoMySql) {
    this.projetoSelecionado = projeto;
    console.log('Projeto Sel:' , projeto);
  }

}
