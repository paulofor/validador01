import { Component, OnInit } from '@angular/core';
import { FunilNegocio, FunilNegocioApi } from '../shared/sdk';
import { ActivatedRoute } from '@angular/router';
import { Params } from '@angular/router';
import { EditaEtapaFunilComponent } from '../edita-etapa-funil/edita-etapa-funil.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-lista-etapa-funil',
  templateUrl: './lista-etapa-funil.component.html',
  styleUrls: ['./lista-etapa-funil.component.scss']
})
export class ListaEtapaFunilComponent implements OnInit {

  funil:FunilNegocio;

  filtro = { "include": "etapaClientes" };

  constructor(private route: ActivatedRoute, private srv:FunilNegocioApi, private dialog: MatDialog) { }

  ngOnInit() {
    this.carregaFunilEtapa();
  }

  carregaFunilEtapa() {
    this.route.params.subscribe((params: Params[]) => {
      let id = params['id'];
      this.srv.findById(id, this.filtro)
        .subscribe((result: FunilNegocio) => {
          console.log("Result - ListaEtapaFunilComponent: ", JSON.stringify(result));
          this.funil = result;
        })
    })
  }

  openDialog(item?) {
    
    this.dialog.afterAllClosed.subscribe(result => {
      console.log('Dialog result: ${result}');
      this.carregaFunilEtapa();
    });
    this.dialog.open(EditaEtapaFunilComponent, {
      width: '800px',
      data: {
        item: item,
        funil : this.funil
      }
    });
    
  }

}
