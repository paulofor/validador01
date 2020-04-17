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

  projeto: ProjetoMySql = new ProjetoMySql();
  palavraProjeto: PalavraGoogleProjeto;

  projetoSelecionado: ProjetoMySql;

  constructor(public dialogRef: MatDialogRef<AlocacaoPalavraChaveComponent>
    , @Inject(MAT_DIALOG_DATA) public data: any, private servico: ProjetoMySqlApi,
    private srvPalavra: PalavraGoogleProjetoApi) {
  }

 
  ngOnInit() {
    console.log('Entrou no init');
    this.palavraProjeto = new PalavraGoogleProjeto();
    this.palavra = this.data.itemSelecionado.palavraChaveGoogleId;
    console.log('Palavra escolhida: ' , this.palavra);
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
      startWith(' '),
      switchMap(value => this.servico.PesquisaPorTrecho(value))
      );
  }

  onSubmit() {
    this.palavraProjeto.palavraChaveGoogleId = this.data.itemSelecionado.palavraChaveGoogleId;
    this.palavraProjeto.projetoMySqlId = this.projeto.id;
    console.log('Relacionameto-Submit: ' , this.palavraProjeto);
    this.srvPalavra.create(this.palavraProjeto)
      .subscribe((result) => {
        this.closeDialog();
      })
  }

  mostraNome(projeto: ProjetoMySql): string {
    return (projeto?projeto.nome:'');
  }

  setProjeto(objeto) {
    this.projeto.id = (objeto.id?objeto.id:0);
  }

  closeDialog() {
    this.dialogRef.close('Pizza!');
  }
}
