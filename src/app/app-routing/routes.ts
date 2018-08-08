import { Routes } from '@angular/router';


import { HomeComponent } from '../home/home.component';
import { ProjetosComponent } from '../projetos/projetos.component';
import { ProjetoCriaComponent } from '../projeto-cria/projeto-cria.component';

import { CanvasProjetoComponent } from '../canvas-projeto/canvas-projeto.component';
import { CanvasMvpComponent } from '../canvas-mvp/canvas-mvp.component';
import { CanvasPropostaValorComponent } from '../canvas-proposta-valor/canvas-proposta-valor.component';
import { CanvasDorGanhoComponent } from '../canvas-dor-ganho/canvas-dor-ganho.component';
import { PropostaValorComponent } from '../proposta-valor/proposta-valor.component';
import { DetalheValorComponent } from '../detalhe-valor/detalhe-valor.component';
import { ReceitaProjetoComponent } from '../receita-projeto/receita-projeto.component';
import { ImageTesteComponent } from '../image-teste/image-teste.component';
import { FileUploadNg2FileUploadComponent } from '../file-upload-ng2-file-upload/file-upload-ng2-file-upload.component';
import { FileUploadNgxFileDropComponent } from '../file-upload-ngx-file-drop/file-upload-ngx-file-drop.component';
import { DialogComponent } from '../upload/dialog/dialog.component';
import { Angular2ImageUploadComponent } from '../angular2-image-upload/angular2-image-upload.component';
import { ListaProjetoValorComponent } from '../lista-projeto-valor/lista-projeto-valor.component';
import { DetalheProjetoValorComponent } from '../detalhe-projeto-valor/detalhe-projeto-valor.component';
import { EdicaoItemValidacaoComponent } from '../edicao-item-validacao/edicao-item-validacao.component';
import { ListaPaginaValidacaoPorProjetoComponent } from '../lista-pagina-validacao-por-projeto/lista-pagina-validacao-por-projeto.component';
import { EdicaoPaginaValidacaoComponent } from '../edicao-pagina-validacao/edicao-pagina-validacao.component';


export const routes : Routes = [
    { path: 'home' , component: HomeComponent },
    { path: 'imagem' , component: ImageTesteComponent},
    { path: 'arquivos' , component: FileUploadNgxFileDropComponent},
    { path: 'upload' , component: DialogComponent},
    { path: 'imagemUpload', component: Angular2ImageUploadComponent},

    { path: 'receita/:id' , component: ReceitaProjetoComponent },
    { path: 'dorGanhoCanvas/:id' , component: CanvasDorGanhoComponent },
    { path: 'valorCanvas/:id' , component: CanvasPropostaValorComponent },
    { path: 'mvpCanvas/:id' , component: CanvasMvpComponent },
    { path: 'projetoCanvas/:id' , component: CanvasProjetoComponent },
    { path: 'detalheValorCanvas/:id' , component: DetalheValorComponent },
    { path: 'projetos' , component: ProjetosComponent},
    { path: 'propostaValor' , component: PropostaValorComponent},
    { path: 'projetos/insere' , component: ProjetoCriaComponent},

    { path: 'projetosValor' , component: ListaProjetoValorComponent},
    { path: 'projetosValor/:id' , component: DetalheProjetoValorComponent},

    { path: 'adicionaItemValidacaoPorItem/:id' , component: EdicaoItemValidacaoComponent} ,
    { path: 'editaItemValidacao/:id' , component : EdicaoItemValidacaoComponent },

    { path: 'paginaValidacaoPorProjeto/:id' , component: ListaPaginaValidacaoPorProjetoComponent },
    { path: 'editaPaginaValidacaoWeb/:id' , component: EdicaoPaginaValidacaoComponent},
    { path: 'adicionaPaginaValidacaoWebParaProjeto/:id', component: EdicaoPaginaValidacaoComponent  },

    { path: '',          redirectTo: 'home', pathMatch: 'full' }
]