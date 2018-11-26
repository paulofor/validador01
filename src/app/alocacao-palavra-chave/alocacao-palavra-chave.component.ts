import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map, switchMap } from 'rxjs/operators';
import { ProjetoMySql, ProjetoMySqlApi } from '../shared/sdk';

@Component({
  selector: 'app-alocacao-palavra-chave',
  templateUrl: './alocacao-palavra-chave.component.html',
  styleUrls: ['./alocacao-palavra-chave.component.scss']
})
export class AlocacaoPalavraChaveComponent implements OnInit {

  myControl = new FormControl();
  options: string[] = ['Aplicativos', 'Teste 0001', 'Teste 002', 'novo teste'];
  filteredOptions: Observable<string[]>;
  palavra : string;

  projeto : ProjetoMySql;

  constructor(public dialogRef: MatDialogRef<AlocacaoPalavraChaveComponent>
    , @Inject(MAT_DIALOG_DATA) public data: any, private servico: ProjetoMySqlApi) {
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
  this.filteredOptions = this.myControl.valueChanges
  .pipe(
    startWith(''),
    switchMap(value => this.servico.PesquisaPorTrechoStr(value))
  );
}



}
