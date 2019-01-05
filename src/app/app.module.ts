import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Directive } from '@angular/core';


import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { ProjetosComponent } from './projetos/projetos.component';

/* Coloquei manualmente */
import { AppRoutingModule } from './app-routing/app-routing.module';
import { ProjetoCriaComponent } from './projeto-cria/projeto-cria.component';
import { ProjetoEditaComponent } from './projeto-edita/projeto-edita.component';
import { ProjetoExibeComponent } from './projeto-exibe/projeto-exibe.component'
import { FormsModule } from '@angular/forms';

import { CanvasProjetoComponent } from './canvas-projeto/canvas-projeto.component'; 

import { ProjetoApi, GanhoDorCanvasMySqlApi, ItemValidacaoPaginaApi } from './shared/sdk/services/custom';
import { ProjetoCanvasApi } from './shared/sdk/services/custom/ProjetoCanvas';
import { ProjetoMySqlApi } from './shared/sdk/services/custom/ProjetoMySql';
import { ProjetoCanvasMySqlApi } from './shared/sdk/services/custom/ProjetoCanvasMySql';
import { MvpCanvasMySqlApi } from './shared/sdk/services/custom/MvpCanvasMySql';

import { ContainerApi } from './shared/sdk/services/custom';

import { HttpClient, HttpResponse, HttpClientModule } from '@angular/common/http';
import { SocketConnection } from './shared/sdk/sockets/socket.connections';
import { SocketDriver } from './shared/sdk/sockets/socket.driver';
import { SDKModels } from './shared/sdk/services/custom/SDKModels';
import { LoopBackAuth } from './shared/sdk/services/core/auth.service';
import { InternalStorage } from './shared/sdk/storage/storage.swaps';
import { ProjetoCanvasCriaComponent } from './projeto-canvas-cria/projeto-canvas-cria.component';

import {MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatListModule} from '@angular/material/list';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatTableModule} from '@angular/material/table';

import { MatFormFieldModule, MatInputModule, MatButtonModule, MatAutocompleteModule } from '@angular/material';
import { ProjetoCanvasEditaComponent } from './projeto-canvas-edita/projeto-canvas-edita.component';
import { CanvasMvpComponent } from './canvas-mvp/canvas-mvp.component';
import { MvpCanvasCriaComponent } from './mvp-canvas-cria/mvp-canvas-cria.component';
import { MvpCanvasEditaComponent } from './mvp-canvas-edita/mvp-canvas-edita.component';
import { CanvasPropostaValorComponent } from './canvas-proposta-valor/canvas-proposta-valor.component';
import { CanvasDorGanhoComponent } from './canvas-dor-ganho/canvas-dor-ganho.component';
import { DorGanhoCanvasCriaComponent } from './dor-ganho-canvas-cria/dor-ganho-canvas-cria.component';
import { DorGanhoCanvasEditaComponent } from './dor-ganho-canvas-edita/dor-ganho-canvas-edita.component';
import { PropostaValorComponent } from './proposta-valor/proposta-valor.component';
import { DetalheValorComponent } from './detalhe-valor/detalhe-valor.component';
import { ReceitaProjetoComponent } from './receita-projeto/receita-projeto.component';
import { ReceitaEditaComponent } from './receita-edita/receita-edita.component';
import { ImageTesteComponent } from './image-teste/image-teste.component';

import { NgxImgModule } from 'ngx-img';


import { FileSelectDirective, FileDropDirective, FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { FileUploadNg2FileUploadComponent } from './file-upload-ng2-file-upload/file-upload-ng2-file-upload.component';
import { FileUploadNgxFileDropComponent } from './file-upload-ngx-file-drop/file-upload-ngx-file-drop.component';

import { FileDropModule } from 'ngx-file-drop';
import { UploadModule } from './upload/upload.module';
import { Angular2ImageUploadComponent } from './angular2-image-upload/angular2-image-upload.component';
import { ImageUploadModule } from "angular2-image-upload";
import { ListaProjetoValorComponent } from './lista-projeto-valor/lista-projeto-valor.component';
import { DetalheProjetoValorComponent } from './detalhe-projeto-valor/detalhe-projeto-valor.component';
import { ListaValorPorProjetoComponent } from './lista-valor-por-projeto/lista-valor-por-projeto.component';
import { ListaValidacaoPorValorComponent } from './lista-validacao-por-valor/lista-validacao-por-valor.component';
import { EdicaoItemValidacaoComponent } from './edicao-item-validacao/edicao-item-validacao.component';
import { ListaPaginaValidacaoPorProjetoComponent } from './lista-pagina-validacao-por-projeto/lista-pagina-validacao-por-projeto.component';
import { EdicaoPaginaValidacaoComponent } from './edicao-pagina-validacao/edicao-pagina-validacao.component';
import { PaginaValidacaoWebApi, AnuncioAdsApi, SDKBrowserModule } from './shared/sdk';
import { EscolheItemValidacaoComponent } from './escolhe-item-validacao/escolhe-item-validacao.component';
import { EscolhedorItemVallidacaoComponent } from './escolhedor-item-vallidacao/escolhedor-item-vallidacao.component';
import { NgDragDropModule } from 'ng-drag-drop';
import { ImagemPrincipalPaginaComponent } from './imagem-principal-pagina/imagem-principal-pagina.component';
import { AnuncioAdsEditaComponent } from './anuncio-ads-edita/anuncio-ads-edita.component';
import { ProjetoAplicacaoComponent } from './projeto-aplicacao/projeto-aplicacao.component';
import { EntidadePorAplicacaoComponent } from './entidade-por-aplicacao/entidade-por-aplicacao.component';
import { DetalheAplicacaoComponent } from './detalhe-aplicacao/detalhe-aplicacao.component';
import { ItensCanvasParaEntidadesComponent } from './itens-canvas-para-entidades/itens-canvas-para-entidades.component';
import { ResumoAplicacaoComponent } from './resumo-aplicacao/resumo-aplicacao.component';
import { ListaCampanhaPorPaginaComponent } from './lista-campanha-por-pagina/lista-campanha-por-pagina.component';
import { CampanhaEditaCriaComponent } from './campanha-edita-cria/campanha-edita-cria.component';
import { EntidadeEditaCriaComponent } from './entidade-edita-cria/entidade-edita-cria.component';
import { DorGanhoPalavraChaveComponent } from './dor-ganho-palavra-chave/dor-ganho-palavra-chave.component';
import { PalavraChaveCriaComponent } from './palavra-chave-cria/palavra-chave-cria.component';
import { EditaAtributoEntidadeComponent } from './edita-atributo-entidade/edita-atributo-entidade.component';
import { EntidadeResumoComponent } from './entidade-resumo/entidade-resumo.component';
import { EntidadePorAplicacaoV2Component } from './entidade-por-aplicacao-v2/entidade-por-aplicacao-v2.component';
import { ListaAtributoPorEntidadeComponent } from './lista-atributo-por-entidade/lista-atributo-por-entidade.component';
import { ListaRelacionamentoPorEntidadeComponent } from './lista-relacionamento-por-entidade/lista-relacionamento-por-entidade.component';
import { EditaRelacionamentoEntidadeComponent } from './edita-relacionamento-entidade/edita-relacionamento-entidade.component';
import { ListaItemValidacaoPorProjetoComponent } from './lista-item-validacao-por-projeto/lista-item-validacao-por-projeto.component';
import { TelaWebPorAplicacaoComponent } from './tela-web-por-aplicacao/tela-web-por-aplicacao.component';
import { TelaWebEditaCriaComponent } from './tela-web-edita-cria/tela-web-edita-cria.component';
import { PalavraChaveRaizComponent } from './palavra-chave-raiz/palavra-chave-raiz.component';
import { PalavraChaveRaizCriaEditaComponent } from './palavra-chave-raiz-cria-edita/palavra-chave-raiz-cria-edita.component';
import { MelhoresPalavrasListaGeralComponent } from './melhores-palavras-lista-geral/melhores-palavras-lista-geral.component';
import { PalavraChaveRaizDetalheComponent } from './palavra-chave-raiz-detalhe/palavra-chave-raiz-detalhe.component';
import { PalavraChaveRaizDetalheCompletaComponent } from './palavra-chave-raiz-detalhe-completa/palavra-chave-raiz-detalhe-completa.component';
import { AlocacaoPalavraChaveComponent } from './alocacao-palavra-chave/alocacao-palavra-chave.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProcessoNegocioListaComponent } from './processo-negocio-lista/processo-negocio-lista.component';
import { ProcessoNegocioEditaComponent } from './processo-negocio-edita/processo-negocio-edita.component';
import { EtapaProjetoListaComponent } from './etapa-projeto-lista/etapa-projeto-lista.component';
import { EtapaProjetoEditaComponent } from './etapa-projeto-edita/etapa-projeto-edita.component';
import { NavegadorPalavrasComponent } from './navegador-palavras/navegador-palavras.component';
import { AgrupadorPalavrasComponent } from './agrupador-palavras/agrupador-palavras.component';
import { TipoComponenteWebListaComponent } from './tipo-componente-web-lista/tipo-componente-web-lista.component';
import { TipoComponenteWebEditaComponent } from './tipo-componente-web-edita/tipo-componente-web-edita.component';
import { TipoExperienciaEditaComponent } from './tipo-experiencia-edita/tipo-experiencia-edita.component';
import { TipoExperienciaListaComponent } from './tipo-experiencia-lista/tipo-experiencia-lista.component';
import { RespostaMercadoListaComponent } from './resposta-mercado-lista/resposta-mercado-lista.component';
import { RespostaMercadoEditaComponent } from './resposta-mercado-edita/resposta-mercado-edita.component';
import { TelaDetalheComponent } from './tela-detalhe/tela-detalhe.component';
import { EscolhaComponenteTelaWebComponent } from './escolha-componente-tela-web/escolha-componente-tela-web.component';
import { ProjetoEtapaValorComponent } from './projeto-etapa-valor/projeto-etapa-valor.component';
import { ProjetoConceitoProdutoComponent } from './projeto-conceito-produto/projeto-conceito-produto.component';
import { ProjetoValorTelaComponent } from './projeto-valor-tela/projeto-valor-tela.component';
import { ListaPalavraChavePorProjetoComponent } from './lista-palavra-chave-por-projeto/lista-palavra-chave-por-projeto.component';
import { ListaValorConceitoComponent } from './lista-valor-conceito/lista-valor-conceito.component';
import { EditaValorConceitoComponent } from './edita-valor-conceito/edita-valor-conceito.component';
import { EditaTelaAppComponent } from './edita-tela-app/edita-tela-app.component';
import { EditaConceitoProjetoComponent } from './edita-conceito-projeto/edita-conceito-projeto.component';
import { ConceitoProdutoListaComponent } from './conceito-produto-lista/conceito-produto-lista.component';
import { ConceitoProdutoEditaComponent } from './conceito-produto-edita/conceito-produto-edita.component';
import { ListaTelaAppComponent } from './lista-tela-app/lista-tela-app.component';
import { ListaTelaWebComponent } from './lista-tela-web/lista-tela-web.component';
import { EditaTelaWebComponent } from './edita-tela-web/edita-tela-web.component';

import { ProjetosFaseAnuncioComponent } from './projetos-fase-anuncio/projetos-fase-anuncio.component';
import { ProjetoGerenciaAnuncioComponent } from './projeto-gerencia-anuncio/projeto-gerencia-anuncio.component';
import { AnuncioAdsEditaValorConceitoComponent } from './anuncio-ads-edita-valor-conceito/anuncio-ads-edita-valor-conceito.component';
import { PaginaValidacaoGerenciadorComponent } from './pagina-validacao-gerenciador/pagina-validacao-gerenciador.component';
import { GerenciadorPaginaValidacaoComponent } from './gerenciador-pagina-validacao/gerenciador-pagina-validacao.component';
import { EditaPaginaValidacaoWebComponent } from './edita-pagina-validacao-web/edita-pagina-validacao-web.component';
import { ItemValidacaoGerenciadorComponent } from './item-validacao-gerenciador/item-validacao-gerenciador.component';
import { EditaItemValidacaoTelaComponent } from './edita-item-validacao-tela/edita-item-validacao-tela.component';
import { ProjetoFaseValidacaoComponent } from './projeto-fase-validacao/projeto-fase-validacao.component';
import { TelaAppDetalheComponent } from './tela-app-detalhe/tela-app-detalhe.component';
import { EntidadePorProjetoComponent } from './entidade-por-projeto/entidade-por-projeto.component';
import { ListaCampanhaPorProjetoComponent } from './lista-campanha-por-projeto/lista-campanha-por-projeto.component';
import { ListaCampanhaConceitoAtivoPorProjetoComponent } from './lista-campanha-conceito-ativo-por-projeto/lista-campanha-conceito-ativo-por-projeto.component';
import { DetalheCampanhaComponent } from './detalhe-campanha/detalhe-campanha.component';
import { ResultadoCampanhaAnuncioComponent } from './resultado-campanha-anuncio/resultado-campanha-anuncio.component';
import { ResultadoCampanhaPalavraChaveComponent } from './resultado-campanha-palavra-chave/resultado-campanha-palavra-chave.component';
import { EditaSetupCampanhaComponent } from './edita-setup-campanha/edita-setup-campanha.component';
import { ListaSetupCampanhaComponent } from './lista-setup-campanha/lista-setup-campanha.component';
import { CampanhaEditaCriaV2Component } from './campanha-edita-cria-v2/campanha-edita-cria-v2.component';
import { DetalheCampanhaParaFechamentoComponent } from './detalhe-campanha-para-fechamento/detalhe-campanha-para-fechamento.component';
import { ListaCadProjetoComponent } from './lista-cad-projeto/lista-cad-projeto.component';
import { EditaCadProjetoComponent } from './edita-cad-projeto/edita-cad-projeto.component';
import { DisplayPaginaValidacaoWebComponent } from './display-pagina-validacao-web/display-pagina-validacao-web.component';
import { EscolheAnuncioParaCampanhaComponent } from './escolhe-anuncio-para-campanha/escolhe-anuncio-para-campanha.component';
import { EscolhedorAnuncioParaCampanhaComponent } from './escolhedor-anuncio-para-campanha/escolhedor-anuncio-para-campanha.component';
import { DisplayAnuncioComponent } from './display-anuncio/display-anuncio.component';




@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomeComponent,
    ProjetosComponent,
    ProjetoCriaComponent,
    ProjetoEditaComponent,
    ProjetoExibeComponent,
    CanvasProjetoComponent,
    ProjetoCanvasCriaComponent,
    ProjetoCanvasEditaComponent,
    CanvasMvpComponent,
    MvpCanvasCriaComponent,
    MvpCanvasEditaComponent,
    CanvasPropostaValorComponent,
    CanvasDorGanhoComponent,
    DorGanhoCanvasCriaComponent,
    DorGanhoCanvasEditaComponent,
    PropostaValorComponent,
    DetalheValorComponent,
    ReceitaProjetoComponent,
    ReceitaEditaComponent,
    ImageTesteComponent,
    //ArquivosComponent,
    FileSelectDirective,
    FileUploadNg2FileUploadComponent,
    FileUploadNgxFileDropComponent,
    Angular2ImageUploadComponent,
    ListaProjetoValorComponent,
    DetalheProjetoValorComponent,
    ListaValorPorProjetoComponent,
    ListaValidacaoPorValorComponent,
    EdicaoItemValidacaoComponent,
    ListaPaginaValidacaoPorProjetoComponent,
    EdicaoPaginaValidacaoComponent,
    EscolheItemValidacaoComponent,
    EscolhedorItemVallidacaoComponent,
    ImagemPrincipalPaginaComponent,
    AnuncioAdsEditaComponent,
    ProjetoAplicacaoComponent,
    EntidadePorAplicacaoComponent,
    DetalheAplicacaoComponent,
    ItensCanvasParaEntidadesComponent,
    ResumoAplicacaoComponent,
    ListaCampanhaPorPaginaComponent,
    CampanhaEditaCriaComponent,
    EntidadeEditaCriaComponent,
    DorGanhoPalavraChaveComponent,
    PalavraChaveCriaComponent,
    EditaAtributoEntidadeComponent,
    EntidadeResumoComponent,
    EntidadePorAplicacaoV2Component,
    ListaAtributoPorEntidadeComponent,
    ListaRelacionamentoPorEntidadeComponent,
    EditaRelacionamentoEntidadeComponent,
    ListaItemValidacaoPorProjetoComponent,
    TelaWebPorAplicacaoComponent,
    TelaWebEditaCriaComponent,
    PalavraChaveRaizComponent,
    PalavraChaveRaizCriaEditaComponent,
    MelhoresPalavrasListaGeralComponent,
    PalavraChaveRaizDetalheComponent,
    PalavraChaveRaizDetalheCompletaComponent,
    AlocacaoPalavraChaveComponent,
    ProcessoNegocioListaComponent,
    ProcessoNegocioEditaComponent,
    EtapaProjetoListaComponent,
    EtapaProjetoEditaComponent,
    NavegadorPalavrasComponent,
    AgrupadorPalavrasComponent,
    TipoComponenteWebListaComponent,
    TipoComponenteWebEditaComponent,
    TipoExperienciaEditaComponent,
    TipoExperienciaListaComponent,
    RespostaMercadoListaComponent,
    RespostaMercadoEditaComponent,
    TelaDetalheComponent,
    EscolhaComponenteTelaWebComponent,
    ProjetoEtapaValorComponent,
    ProjetoConceitoProdutoComponent,
    ProjetoValorTelaComponent,
    ListaPalavraChavePorProjetoComponent,
    ListaValorConceitoComponent,
    EditaValorConceitoComponent,
    EditaTelaAppComponent,
    EditaConceitoProjetoComponent,
    ConceitoProdutoListaComponent,
    ConceitoProdutoEditaComponent,
    ListaTelaAppComponent,
    ListaTelaWebComponent,
    EditaTelaWebComponent,

    ProjetosFaseAnuncioComponent,
    ProjetoGerenciaAnuncioComponent,
    AnuncioAdsEditaValorConceitoComponent,
    PaginaValidacaoGerenciadorComponent,
    GerenciadorPaginaValidacaoComponent,
    EditaPaginaValidacaoWebComponent,
    ItemValidacaoGerenciadorComponent,
    EditaItemValidacaoTelaComponent,
    ProjetoFaseValidacaoComponent,
    TelaAppDetalheComponent,
    EntidadePorProjetoComponent,
    ListaCampanhaPorProjetoComponent,
    ListaCampanhaConceitoAtivoPorProjetoComponent,
    DetalheCampanhaComponent,
    ResultadoCampanhaAnuncioComponent,
    ResultadoCampanhaPalavraChaveComponent,
    EditaSetupCampanhaComponent,
    ListaSetupCampanhaComponent,
    CampanhaEditaCriaV2Component,
    DetalheCampanhaParaFechamentoComponent,
    ListaCadProjetoComponent,
    EditaCadProjetoComponent,
    DisplayPaginaValidacaoWebComponent,
    EscolheAnuncioParaCampanhaComponent,
    EscolhedorAnuncioParaCampanhaComponent,
    DisplayAnuncioComponent,


  ],
  entryComponents: [
    ProjetoCanvasCriaComponent,
    ProjetoCanvasEditaComponent,
    MvpCanvasCriaComponent,
    MvpCanvasEditaComponent,
    DorGanhoCanvasCriaComponent,
    DorGanhoCanvasEditaComponent,
    EscolhedorItemVallidacaoComponent,
    EntidadeEditaCriaComponent,
    PalavraChaveCriaComponent,
    CampanhaEditaCriaComponent,
    EditaAtributoEntidadeComponent,
    EditaRelacionamentoEntidadeComponent,
    TelaWebEditaCriaComponent,
    PalavraChaveRaizCriaEditaComponent,
    AlocacaoPalavraChaveComponent,
    EscolhaComponenteTelaWebComponent,
    ConceitoProdutoEditaComponent,
    EditaValorConceitoComponent,
    EditaTelaAppComponent,
    EditaTelaWebComponent,
    AnuncioAdsEditaValorConceitoComponent,
    EditaPaginaValidacaoWebComponent,
    EditaItemValidacaoTelaComponent,
    EditaSetupCampanhaComponent,
    CampanhaEditaCriaV2Component,
    EscolhedorAnuncioParaCampanhaComponent,
    EditaCadProjetoComponent
    //ArquivosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule ,
    MatDialogModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    NgxImgModule.forRoot(),
    FileDropModule,
    UploadModule,
    ImageUploadModule.forRoot(),
    NgDragDropModule.forRoot(),
    SDKBrowserModule.forRoot(),
    MatExpansionModule,
    MatListModule,
    MatTabsModule,
    MatCardModule,
    MatIconModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatTableModule,
    MatAutocompleteModule,
    ReactiveFormsModule
  ],
  providers: [
    HttpClient, 
    SocketConnection  , 
    SocketDriver,
    SDKModels,
    LoopBackAuth,
    InternalStorage
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
