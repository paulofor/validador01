import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { EscolhedorItemVallidacaoComponent } from '../escolhedor-item-vallidacao/escolhedor-item-vallidacao.component';

@Component({
  selector: 'app-escolhe-item-validacao',
  templateUrl: './escolhe-item-validacao.component.html',
  styleUrls: ['./escolhe-item-validacao.component.scss']
})
export class EscolheItemValidacaoComponent implements OnInit {

  @Input() pagina;

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(pagina) {
    console.log('Pagina:', pagina);
    this.dialog.afterAllClosed.subscribe(result => {
      console.log(`Dialog result: ${result}`); 
      //this.carregaDados();
    });
    this.dialog.open(EscolhedorItemVallidacaoComponent, {
      width: '600px',
      data: {
        pagina: this.pagina
      }
    });
  }

}
