import { Component, OnInit, Input } from '@angular/core';
import { ConceitoProduto, Entidade, EntidadeApi, Aplicacao, AplicacaoApi } from '../shared/sdk';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { EntidadeEditaCriaComponent } from '../entidade-edita-cria/entidade-edita-cria.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-entidade-por-projeto',
  templateUrl: './entidade-por-projeto.component.html',
  styleUrls: ['./entidade-por-projeto.component.scss']
})
export class EntidadePorProjetoComponent implements OnInit {

  @Input() conceito: ConceitoProduto;
  listaEntidade : Entidade[];

  aplicacao: Aplicacao;

  constructor(private route: ActivatedRoute, private servico: EntidadeApi, 
              private srvAplicacao: AplicacaoApi, private dialog: MatDialog) { }

  ngOnInit() {
    this.obtemAplicacao();
  }

  obtemAplicacao() {
    this.srvAplicacao.ObtemPorIdConceito(this.conceito.id)
      .subscribe((resultado:Aplicacao) => {
        this.aplicacao = resultado;
        this.atualizaLista();
      })
  }


  atualizaLista() {
    let filtro =  { 
                    'where' : {'projetoMySqlId' : this.conceito.projetoMySqlId} , 
                    'include' : ['atributoChave', 'atributoIdentificador' ],
                    'order' : 'nome'
                  };
    this.servico.find(filtro)
      .subscribe((result: Entidade[]) => {
        this.listaEntidade = result;
      });
  }

 
  openDialog() {
    
    this.dialog.afterAllClosed.subscribe(result => {
      console.log('Dialog result: ${result}'); 
      this.atualizaLista();
    });
    this.dialog.open(EntidadeEditaCriaComponent, {
      width: '800px',
      data: {
        aplicacao: this.aplicacao
      }
    });
  }


  alteraEntidade(entidade) {
    console.log('entidade:', entidade);
    this.dialog.afterAllClosed.subscribe(result => {
      console.log('Dialog result: ${result}'); 
      this.atualizaLista();
    });
    this.dialog.open(EntidadeEditaCriaComponent, {
      width: '800px',
      data: {
        entidade: entidade
      }
    });
  }

}
