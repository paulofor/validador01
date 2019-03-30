import { Component, OnInit } from '@angular/core';
import { Entidade, EntidadeApi } from '../shared/sdk';
import { ActivatedRoute } from '@angular/router';
import { ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { MatDialog } from '@angular/material';
import { EntidadeEditaCriaComponent } from '../entidade-edita-cria/entidade-edita-cria.component';

@Component({
  selector: 'app-entidade-resumo',
  templateUrl: './entidade-resumo.component.html',
  styleUrls: ['./entidade-resumo.component.scss']
})
export class EntidadeResumoComponent implements OnInit {

  entidade: Entidade;

  constructor(private route: ActivatedRoute, private servico: EntidadeApi, private dialog: MatDialog) { }

  ngOnInit() {
    console.log('Entrou ngOnInit');
    this.carregaEntidade();
  }

  ngOnChanges() {
    console.log('Entrou ngOnChanges');
  }

  carregaEntidade() {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.servico.findById(params.get('id'))))
        .subscribe((result: Entidade) => {
        console.log('Entidade: ' + JSON.stringify(result));
        this.entidade = result;
      })
  }



}
