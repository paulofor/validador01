import { Component, OnInit } from '@angular/core';

declare interface TableData {
  headerRow: string[];
  dataRows: string[][];
}

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.scss']
})
export class ProjetosComponent implements OnInit {

  public tableData1: TableData;
  public tableData2: TableData;

  constructor() { }

  ngOnInit() {
    this.tableData1 = {
      headerRow: [ 'Projeto', 'Mercado', 'Valor' , 'Dor'],
      dataRows: [
          ['Loja de Roupa Feminina Atacado', 'Empreendedoras Moda', 'Organização', 'Administração'],
      ]
  };
  }

}
