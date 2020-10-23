/* tslint:disable */
/**
* @module SDKModule
* @author Jonathan Casarrubias <t:@johncasarrubias> <gh:jonathan-casarrubias>
* @license MIT 2016 Jonathan Casarrubias
* @version 2.1.0
* @description
* The SDKModule is a generated Software Development Kit automatically built by
* the LoopBack SDK Builder open source module.
*
* The SDKModule provides Angular 2 >= RC.5 support, which means that NgModules
* can import this Software Development Kit as follows:
*
*
* APP Route Module Context
* ============================================================================
* import { NgModule }       from '@angular/core';
* import { BrowserModule }  from '@angular/platform-browser';
* // App Root 
* import { AppComponent }   from './app.component';
* // Feature Modules
* import { SDK[Browser|Node|Native]Module } from './shared/sdk/sdk.module';
* // Import Routing
* import { routing }        from './app.routing';
* @NgModule({
*  imports: [
*    BrowserModule,
*    routing,
*    SDK[Browser|Node|Native]Module.forRoot()
*  ],
*  declarations: [ AppComponent ],
*  bootstrap:    [ AppComponent ]
* })
* export class AppModule { }
*
**/
import { ErrorHandler } from './services/core/error.service';
import { LoopBackAuth } from './services/core/auth.service';
import { LoggerService } from './services/custom/logger.service';
import { SDKModels } from './services/custom/SDKModels';
import { InternalStorage, SDKStorage } from './storage/storage.swaps';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CookieBrowser } from './storage/cookie.browser';
import { StorageBrowser } from './storage/storage.browser';
import { SocketBrowser } from './sockets/socket.browser';

import { SocketConnection } from './sockets/socket.connections';
import { RealTime } from './services/core/real.time';
import { UserApi } from './services/custom/User';
import { ProjetoApi } from './services/custom/Projeto';
import { ProjetoCanvasApi } from './services/custom/ProjetoCanvas';
import { ProjetoMySqlApi } from './services/custom/ProjetoMySql';
import { ProjetoCanvasMySqlApi } from './services/custom/ProjetoCanvasMySql';
import { MvpCanvasMySqlApi } from './services/custom/MvpCanvasMySql';
import { GanhoDorCanvasMySqlApi } from './services/custom/GanhoDorCanvasMySql';
import { PaginaValidacaoWebApi } from './services/custom/PaginaValidacaoWeb';
import { ItemValidacaoPaginaApi } from './services/custom/ItemValidacaoPagina';
import { RegistroInteresseApi } from './services/custom/RegistroInteresse';
import { ProjetoExemploApi } from './services/custom/ProjetoExemplo';
import { ReceitaApi } from './services/custom/Receita';
import { ContainerApi } from './services/custom/Container';
import { VisitanteApi } from './services/custom/Visitante';
import { AnuncioAdsApi } from './services/custom/AnuncioAds';
import { CampanhaAdsApi } from './services/custom/CampanhaAds';
import { PalavraChaveAdsApi } from './services/custom/PalavraChaveAds';
import { AplicacaoApi } from './services/custom/Aplicacao';
import { Atributo_entidadeApi } from './services/custom/Atributo_entidade';
import { EntidadeApi } from './services/custom/Entidade';
import { ModeloCampanhaAdsApi } from './services/custom/ModeloCampanhaAds';
import { Relacionamento_entidadeApi } from './services/custom/Relacionamento_entidade';
import { CampanhaAnuncioResultadoApi } from './services/custom/CampanhaAnuncioResultado';
import { CampanhaPalavraChaveResultadoApi } from './services/custom/CampanhaPalavraChaveResultado';
import { TelaWebApi } from './services/custom/TelaWeb';
import { TelaAppApi } from './services/custom/TelaApp';
import { PalavraChaveRaizApi } from './services/custom/PalavraChaveRaiz';
import { PalavraChaveGoogleApi } from './services/custom/PalavraChaveGoogle';
import { PalavraChaveEstatisticaApi } from './services/custom/PalavraChaveEstatistica';
import { PalavraGoogleProjetoApi } from './services/custom/PalavraGoogleProjeto';
import { EtapaProjetoApi } from './services/custom/EtapaProjeto';
import { MudancaEtapaApi } from './services/custom/MudancaEtapa';
import { ProcessoNegocioApi } from './services/custom/ProcessoNegocio';
import { ComponenteWebApi } from './services/custom/ComponenteWeb';
import { TelaComponenteWebApi } from './services/custom/TelaComponenteWeb';
import { TipoComponenteWebApi } from './services/custom/TipoComponenteWeb';
import { TipoExperienciaApi } from './services/custom/TipoExperiencia';
import { IndicadorPerformanceProcessoApi } from './services/custom/IndicadorPerformanceProcesso';
import { MedidaIndicadorProcessoApi } from './services/custom/MedidaIndicadorProcesso';
import { RespostaMercadoApi } from './services/custom/RespostaMercado';
import { ConceitoProdutoApi } from './services/custom/ConceitoProduto';
import { ValorConceitoApi } from './services/custom/ValorConceito';
import { RecursoConceitoProdutoApi } from './services/custom/RecursoConceitoProduto';
import { PublicoApi } from './services/custom/Publico';
import { SetupCampanhaApi } from './services/custom/SetupCampanha';
import { EstatisticaMesApi } from './services/custom/EstatisticaMes';
import { SemanaApi } from './services/custom/Semana';
import { TempoExecucaoApi } from './services/custom/TempoExecucao';
import { PlanoExecucaoApi } from './services/custom/PlanoExecucao';
import { DiaSemanaApi } from './services/custom/DiaSemana';
import { ContextoApi } from './services/custom/Contexto';
import { ModeloTelaAppApi } from './services/custom/ModeloTelaApp';
import { PaletaCorApi } from './services/custom/PaletaCor';
import { PaletaAplicacaoApi } from './services/custom/PaletaAplicacao';
import { ComponenteAppApi } from './services/custom/ComponenteApp';
import { ProcessoNegocioEtapaProjetoApi } from './services/custom/ProcessoNegocioEtapaProjeto';
import { PaginaInstalacaoAppApi } from './services/custom/PaginaInstalacaoApp';
import { AnuncioAplicativoApi } from './services/custom/AnuncioAplicativo';
import { VersaoAppApi } from './services/custom/VersaoApp';
import { RespostaVersaoApi } from './services/custom/RespostaVersao';
import { PresencaLojaApi } from './services/custom/PresencaLoja';
import { IdeiaMelhoriaApi } from './services/custom/IdeiaMelhoria';
import { RecursoApi } from './services/custom/Recurso';
import { GrupoAnuncioAplicativoApi } from './services/custom/GrupoAnuncioAplicativo';
import { ClienteExperimentalApi } from './services/custom/ClienteExperimental';
import { DispositivoUsuarioApi } from './services/custom/DispositivoUsuario';
import { ItemValorAppApi } from './services/custom/ItemValorApp';
import { ValorVersaoApi } from './services/custom/ValorVersao';
import { CustoMesApi } from './services/custom/CustoMes';
import { AnuncioAplicacaoResultadoApi } from './services/custom/AnuncioAplicacaoResultado';
import { UsuarioProdutoApi } from './services/custom/UsuarioProduto';
import { VisitaAppApi } from './services/custom/VisitaApp';
import { Cosmetic_OportunidadeDiaApi } from './services/custom/Cosmetic_OportunidadeDia';
import { ContagemProdutoApi } from './services/custom/ContagemProduto';
import { LojaVirtualApi } from './services/custom/LojaVirtual';
import { NotificacaoAppApi } from './services/custom/NotificacaoApp';
import { PagSeguroApi } from './services/custom/PagSeguro';
import { DsUsuarioApi } from './services/custom/DsUsuario';
import { RecursoProdutoApi } from './services/custom/RecursoProduto';
import { IndicadorProdutoApi } from './services/custom/IndicadorProduto';
import { FunilNegocioApi } from './services/custom/FunilNegocio';
import { EtapaClienteApi } from './services/custom/EtapaCliente';
import { MetricaCampanhaApi } from './services/custom/MetricaCampanha';
import { ValorMetricaEtapaApi } from './services/custom/ValorMetricaEtapa';
import { ValorEtapaFunilDiaApi } from './services/custom/ValorEtapaFunilDia';
import { ValorEtapaFunilSemanaApi } from './services/custom/ValorEtapaFunilSemana';
import { ValorEtapaFunilCampanhaApi } from './services/custom/ValorEtapaFunilCampanha';
import { VersaoRecursoApi } from './services/custom/VersaoRecurso';
import { ErroLogicoLogApi } from './services/custom/ErroLogicoLog';
import { VisitaAppLogApi } from './services/custom/VisitaAppLog';
import { MonitorFaseInicialAppApi } from './services/custom/MonitorFaseInicialApp';
/**
* @module SDKBrowserModule
* @description
* This module should be imported when building a Web Application in the following scenarios:
*
*  1.- Regular web application
*  2.- Angular universal application (Browser Portion)
*  3.- Progressive applications (Angular Mobile, Ionic, WebViews, etc)
**/
@NgModule({
  imports:      [ CommonModule, HttpClientModule ],
  declarations: [ ],
  exports:      [ ],
  providers:    [
    ErrorHandler,
    SocketConnection
  ]
})
export class SDKBrowserModule {
  static forRoot(internalStorageProvider: any = {
    provide: InternalStorage,
    useClass: CookieBrowser
  }): ModuleWithProviders {
    return {
      ngModule  : SDKBrowserModule,
      providers : [
        LoopBackAuth,
        LoggerService,
        SDKModels,
        RealTime,
        UserApi,
        ProjetoApi,
        ProjetoCanvasApi,
        ProjetoMySqlApi,
        ProjetoCanvasMySqlApi,
        MvpCanvasMySqlApi,
        GanhoDorCanvasMySqlApi,
        PaginaValidacaoWebApi,
        ItemValidacaoPaginaApi,
        RegistroInteresseApi,
        ProjetoExemploApi,
        ReceitaApi,
        ContainerApi,
        VisitanteApi,
        AnuncioAdsApi,
        CampanhaAdsApi,
        PalavraChaveAdsApi,
        AplicacaoApi,
        Atributo_entidadeApi,
        EntidadeApi,
        ModeloCampanhaAdsApi,
        Relacionamento_entidadeApi,
        CampanhaAnuncioResultadoApi,
        CampanhaPalavraChaveResultadoApi,
        TelaWebApi,
        TelaAppApi,
        PalavraChaveRaizApi,
        PalavraChaveGoogleApi,
        PalavraChaveEstatisticaApi,
        PalavraGoogleProjetoApi,
        EtapaProjetoApi,
        MudancaEtapaApi,
        ProcessoNegocioApi,
        ComponenteWebApi,
        TelaComponenteWebApi,
        TipoComponenteWebApi,
        TipoExperienciaApi,
        IndicadorPerformanceProcessoApi,
        MedidaIndicadorProcessoApi,
        RespostaMercadoApi,
        ConceitoProdutoApi,
        ValorConceitoApi,
        RecursoConceitoProdutoApi,
        PublicoApi,
        SetupCampanhaApi,
        EstatisticaMesApi,
        SemanaApi,
        TempoExecucaoApi,
        PlanoExecucaoApi,
        DiaSemanaApi,
        ContextoApi,
        ModeloTelaAppApi,
        PaletaCorApi,
        PaletaAplicacaoApi,
        ComponenteAppApi,
        ProcessoNegocioEtapaProjetoApi,
        PaginaInstalacaoAppApi,
        AnuncioAplicativoApi,
        VersaoAppApi,
        RespostaVersaoApi,
        PresencaLojaApi,
        IdeiaMelhoriaApi,
        RecursoApi,
        GrupoAnuncioAplicativoApi,
        ClienteExperimentalApi,
        DispositivoUsuarioApi,
        ItemValorAppApi,
        ValorVersaoApi,
        CustoMesApi,
        AnuncioAplicacaoResultadoApi,
        UsuarioProdutoApi,
        VisitaAppApi,
        Cosmetic_OportunidadeDiaApi,
        ContagemProdutoApi,
        LojaVirtualApi,
        NotificacaoAppApi,
        PagSeguroApi,
        DsUsuarioApi,
        RecursoProdutoApi,
        IndicadorProdutoApi,
        FunilNegocioApi,
        EtapaClienteApi,
        MetricaCampanhaApi,
        ValorMetricaEtapaApi,
        ValorEtapaFunilDiaApi,
        ValorEtapaFunilSemanaApi,
        ValorEtapaFunilCampanhaApi,
        VersaoRecursoApi,
        ErroLogicoLogApi,
        VisitaAppLogApi,
        MonitorFaseInicialAppApi,
        internalStorageProvider,
        { provide: SDKStorage, useClass: StorageBrowser }

      ]
    };
  }
}
/**
* Have Fun!!!
* - Jon
**/
export * from './models/index';
export * from './services/index';
export * from './lb.config';
export * from './storage/storage.swaps';
export { CookieBrowser } from './storage/cookie.browser';
export { StorageBrowser } from './storage/storage.browser';

