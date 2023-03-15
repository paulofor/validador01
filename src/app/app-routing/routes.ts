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
import { ProjetoAplicacaoComponent } from '../projeto-aplicacao/projeto-aplicacao.component';
import { ResumoAplicacaoComponent } from '../resumo-aplicacao/resumo-aplicacao.component';
import { ListaCampanhaPorPaginaComponent } from '../lista-campanha-por-pagina/lista-campanha-por-pagina.component';
import { EntidadeResumoComponent } from '../entidade-resumo/entidade-resumo.component';
import { PalavraChaveRaizComponent } from '../palavra-chave-raiz/palavra-chave-raiz.component';
import { PalavraChaveRaizDetalheComponent } from '../palavra-chave-raiz-detalhe/palavra-chave-raiz-detalhe.component';
import { MelhoresPalavrasListaGeralComponent } from '../melhores-palavras-lista-geral/melhores-palavras-lista-geral.component';
import { PalavraChaveRaizDetalheCompletaComponent } from '../palavra-chave-raiz-detalhe-completa/palavra-chave-raiz-detalhe-completa.component';
import { EtapaProjetoEditaComponent } from '../etapa-projeto-edita/etapa-projeto-edita.component';
import { EtapaProjetoListaComponent } from '../etapa-projeto-lista/etapa-projeto-lista.component';
import { ProcessoNegocioEditaComponent } from '../processo-negocio-edita/processo-negocio-edita.component';
import { ProcessoNegocioListaComponent } from '../processo-negocio-lista/processo-negocio-lista.component';
import { NavegadorPalavrasComponent } from '../navegador-palavras/navegador-palavras.component';
import { TipoComponenteWebListaComponent } from '../tipo-componente-web-lista/tipo-componente-web-lista.component';
import { TipoComponenteWebEditaComponent } from '../tipo-componente-web-edita/tipo-componente-web-edita.component';
import { TipoExperienciaListaComponent } from '../tipo-experiencia-lista/tipo-experiencia-lista.component';
import { TipoExperienciaEditaComponent } from '../tipo-experiencia-edita/tipo-experiencia-edita.component';
import { TelaDetalheComponent } from '../tela-detalhe/tela-detalhe.component';
import { RespostaMercadoEditaComponent } from '../resposta-mercado-edita/resposta-mercado-edita.component';
import { RespostaMercadoListaComponent } from '../resposta-mercado-lista/resposta-mercado-lista.component';
import { ProjetoEtapaValorComponent } from '../projeto-etapa-valor/projeto-etapa-valor.component';
import { ProjetoValorTelaComponent } from '../projeto-valor-tela/projeto-valor-tela.component';
import { ProjetoConceitoProdutoComponent } from '../projeto-conceito-produto/projeto-conceito-produto.component';
import { ProjetosFaseAnuncioComponent } from '../projetos-fase-anuncio/projetos-fase-anuncio.component';
import { ProjetoGerenciaAnuncioComponent } from '../projeto-gerencia-anuncio/projeto-gerencia-anuncio.component';
import { PaginaValidacaoGerenciadorComponent } from '../pagina-validacao-gerenciador/pagina-validacao-gerenciador.component';
import { ItemValidacaoGerenciadorComponent } from '../item-validacao-gerenciador/item-validacao-gerenciador.component';
import { ProjetoFaseValidacaoComponent } from '../projeto-fase-validacao/projeto-fase-validacao.component';
import { TelaAppDetalheComponent } from '../tela-app-detalhe/tela-app-detalhe.component';
import { ListaCampanhaPorProjetoComponent } from '../lista-campanha-por-projeto/lista-campanha-por-projeto.component';
import { ListaCampanhaConceitoAtivoPorProjetoComponent } from '../lista-campanha-conceito-ativo-por-projeto/lista-campanha-conceito-ativo-por-projeto.component';
import { DetalheCampanhaComponent } from '../detalhe-campanha/detalhe-campanha.component';
import { ListaSetupCampanhaComponent } from '../lista-setup-campanha/lista-setup-campanha.component';
import { DetalheCampanhaParaFechamentoComponent } from '../detalhe-campanha-para-fechamento/detalhe-campanha-para-fechamento.component';
import { ListaCadProjetoComponent } from '../lista-cad-projeto/lista-cad-projeto.component';
import { MelhoresPalavrasBaixoCustoComponent } from '../melhores-palavras-baixo-custo/melhores-palavras-baixo-custo.component';
import { PlanejamentoExecucaoComponent } from '../planejamento-execucao/planejamento-execucao.component';
import { ExecucaoDiariaComponent } from '../execucao-diaria/execucao-diaria.component';
import { ListaItemValidacaoProjetoComponent } from '../lista-item-validacao-projeto/lista-item-validacao-projeto.component';
import { ListaPaletaCorComponent } from '../lista-paleta-cor/lista-paleta-cor.component';
import { ProjetoPalavraChaveComponent } from '../projeto-palavra-chave/projeto-palavra-chave.component';
import { ProjetoPalavraChaveDetalheComponent } from '../projeto-palavra-chave-detalhe/projeto-palavra-chave-detalhe.component';
import { ProjetoFaseInstalacaoComponent } from '../projeto-fase-instalacao/projeto-fase-instalacao.component';
import { PaginaInstalacaoGerenciadorComponent } from '../pagina-instalacao-gerenciador/pagina-instalacao-gerenciador.component';
import { EdicaoPaginaInstalacaoAppComponent } from '../edicao-pagina-instalacao-app/edicao-pagina-instalacao-app.component';
import { VisitantesPorPaginaValidacaoWebComponent } from '../visitantes-por-pagina-validacao-web/visitantes-por-pagina-validacao-web.component';
import { VisitantesPorPaginaInstalacaoAppComponent } from '../visitantes-por-pagina-instalacao-app/visitantes-por-pagina-instalacao-app.component';
import { AnuncioAppGerenciadorComponent } from '../anuncio-app-gerenciador/anuncio-app-gerenciador.component';
import { VersaoAppListaComponent } from '../versao-app-lista/versao-app-lista.component';
import { VisitantePorVersaoAppComponent } from '../visitante-por-versao-app/visitante-por-versao-app.component';
import { PresencaLojaListaComponent } from '../presenca-loja-lista/presenca-loja-lista.component';
import { PresencaLojaDetalheComponent } from '../presenca-loja-detalhe/presenca-loja-detalhe.component';
import { DisplayPresencaLojaComponent } from '../display-presenca-loja/display-presenca-loja.component';
import { VersaoAppDetalheComponent } from '../versao-app-detalhe/versao-app-detalhe.component';
import { ListaItemValorPorProjetoComponent } from '../lista-item-valor-por-projeto/lista-item-valor-por-projeto.component';
import { ListaProjetoFinanceiroGeralComponent } from '../lista-projeto-financeiro-geral/lista-projeto-financeiro-geral.component';
import { CustoAnoComponent } from '../custo-ano/custo-ano.component';
import { ListaDispositivoPorVersaoComponent } from '../lista-dispositivo-por-versao/lista-dispositivo-por-versao.component';
import { ProjetoUsuarioComponent } from '../projeto-usuario/projeto-usuario.component';
import { ProjetoUsuarioDetalheComponent } from '../projeto-usuario-detalhe/projeto-usuario-detalhe.component';
import { CosmeticCenterOportunidadeComponent } from '../cosmetic-center-oportunidade/cosmetic-center-oportunidade.component';
import { ProjetoMetricaProdutoComponent } from '../projeto-metrica-produto/projeto-metrica-produto.component';
import { MetricaMesProdutoComponent } from '../metrica-mes-produto/metrica-mes-produto.component';
import { ListaIndicadorProdutoComponent } from '../lista-indicador-produto/lista-indicador-produto.component';
import { ListaRecursoProdutoComponent } from '../lista-recurso-produto/lista-recurso-produto.component';
import { EditaIndicadorProdutoComponent } from '../edita-indicador-produto/edita-indicador-produto.component';
import { EditaRecursoProdutoComponent } from '../edita-recurso-produto/edita-recurso-produto.component';
import { ListaFunilComponent } from '../lista-funil/lista-funil.component';
import { ListaEtapaFunilComponent } from '../lista-etapa-funil/lista-etapa-funil.component';
import { MetricaCampanhaComponent } from '../metrica-campanha/metrica-campanha.component';
import { DetalheRecursoProdutoComponent } from '../detalhe-recurso-produto/detalhe-recurso-produto.component';
import { PlanejamentoExecucaoRecursoComponent } from '../planejamento-execucao-recurso/planejamento-execucao-recurso.component';
import { ExecucaoDiariaRecursoComponent } from '../execucao-diaria-recurso/execucao-diaria-recurso.component';

import { VisitaAppComponent } from '../visita-app/visita-app.component';
import { ErroLogicoLogComponent } from '../erro-logico-log/erro-logico-log.component';
import { MonitorFaseInicialAppComponent } from '../monitor-fase-inicial-app/monitor-fase-inicial-app.component';
import { ExplicaProcessoComponent } from '../explica-processo/explica-processo.component';
import { TecnologiaOportunidadeComponent } from '../tecnologia-oportunidade/tecnologia-oportunidade.component';
import { ProjetoEvolucaoComponent } from '../projeto-evolucao/projeto-evolucao.component';
import { SetupDetalheComponent } from '../setup-detalhe/setup-detalhe.component';
import { ProjetoResultadoComponent } from '../projeto-resultado/projeto-resultado.component';
import { UsuarioHistoricoComponent } from '../usuario-historico/usuario-historico.component';
import { TelaAppExibeDetalheComponent } from '../tela-app-exibe-detalhe/tela-app-exibe-detalhe.component';
import { CampanhaSemTabelaListComponent } from '../campanha-sem-tabela-list/campanha-sem-tabela-list.component';
import { UsuarioProdutoHistoricoComponent } from '../usuario-produto-historico/usuario-produto-historico.component';
import { AcessoAssinaturaListComponent } from '../acesso-assinatura-list/acesso-assinatura-list.component';
import { MetricaVersaoAppComponent } from '../metrica-versao-app/metrica-versao-app.component';
import { ComputadorMelhoresComponent } from '../computador-melhores/computador-melhores.component';
import { CelularMelhoresComponent } from '../celular-melhores/celular-melhores.component';
import { TvMelhoresComponent } from '../tv-melhores/tv-melhores.component';


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
    { path: 'editaPaginaInstalacaoApp/:id' , component: EdicaoPaginaInstalacaoAppComponent},
    { path: 'adicionaPaginaValidacaoWebParaProjeto/:id', component: EdicaoPaginaValidacaoComponent  },

    { path: 'projetoAplicacao' , component: ProjetoAplicacaoComponent },
    { path: 'projetoAplicacao/:id' , component: ResumoAplicacaoComponent },

    { path: 'listaCampanhaPorPaginaValidacao/:id' , component: ListaCampanhaPorPaginaComponent},

    { path: 'entidadeResumo/:id' , component : EntidadeResumoComponent },

    { path: 'palavraChaveRaiz' , component : PalavraChaveRaizComponent },
    { path: 'palavraChaveRaiz/:id' , component : NavegadorPalavrasComponent }, 
    { path: 'palavraChaveRaizCompleta/:id' , component : PalavraChaveRaizDetalheCompletaComponent },
    //{ path: 'palavraMelhores' , component: MelhoresPalavrasListaGeralComponent },
    { path: 'palavraMelhores' , component: NavegadorPalavrasComponent },

    { path: 'etapaProjeto' , component: EtapaProjetoListaComponent },
    { path: 'etapaProjeto/:id' , component: EtapaProjetoEditaComponent },
    
    { path: 'processoNegocio' , component: ProcessoNegocioListaComponent },
    { path: 'processoNegocio/:id' , component: ProcessoNegocioEditaComponent },

    { path: 'tipoComponenteWeb' , component: TipoComponenteWebListaComponent },
    { path: 'tipoComponenteWeb/:id' , component: TipoComponenteWebEditaComponent },

    { path: 'tipoExperiencia' , component: TipoExperienciaListaComponent },
    { path: 'tipoExperiencia/:id' , component: TipoExperienciaEditaComponent },

    { path: 'respostaMercado' , component: RespostaMercadoListaComponent },
    { path: 'respostaMercado/:id' , component: RespostaMercadoEditaComponent },

    { path: 'telaWebResumo/:id' , component: TelaDetalheComponent },


    { path: 'projetosFaseValor' , component: ProjetoEtapaValorComponent},
    { path: 'projetosFaseAnuncio' , component: ProjetosFaseAnuncioComponent},
     

    { path: 'projetoConceitoProduto/:id' , component: ProjetoConceitoProdutoComponent},
    { path: 'projetoValorTela/:id' , component: ProjetoValorTelaComponent},

    { path: 'projetoGerenciaAnuncio/:id', component: ProjetoGerenciaAnuncioComponent},
    { path: 'paginaValidacaoGerenciador/:id', component: PaginaValidacaoGerenciadorComponent},
    { path: 'paginaInstalacaoGerenciador/:id', component: PaginaInstalacaoGerenciadorComponent},

    { path: 'itemValidacaoGerenciador/:id' , component : ItemValidacaoGerenciadorComponent },
    { path: 'itemValidacaoProjeto/:id' , component : ListaItemValidacaoProjetoComponent },

    { path: 'projetosFaseValidacao' , component: ProjetoFaseValidacaoComponent },
    { path: 'projetosFaseInstalacao' , component: ProjetoFaseInstalacaoComponent },

    { path: 'detalheTelaApp/:id' , component: TelaAppDetalheComponent },

    { path: 'listaCampanhaPorProjeto/:id' , component: ListaCampanhaPorProjetoComponent},
    { path: 'listaCampanhaConceitoAtivoPorProjeto/:id' , component: ListaCampanhaConceitoAtivoPorProjetoComponent},

    { path: 'detalheCampanha/:id' , component: DetalheCampanhaComponent },

    { path: 'listaSetupCampanha', component: ListaSetupCampanhaComponent },

    { path: 'detalheCampanhaParaFechamento/:id' , component: DetalheCampanhaParaFechamentoComponent }, 

    { path: 'projetosCadastro' , component: ListaCadProjetoComponent },

    { path : 'melhoresPalavrasBaixoCusto' , component: NavegadorPalavrasComponent},

    { path : 'planejamentoExecucao/:id' , component: PlanejamentoExecucaoComponent },
    { path : 'planejamentoExecucaoRecurso/:id' , component: PlanejamentoExecucaoRecursoComponent },

    { path : 'execucaoDiaria/:id' , component: ExecucaoDiariaComponent },
    { path : 'execucaoDiariaRecurso/:id' , component: ExecucaoDiariaRecursoComponent },

    { path : 'listaPaletaCor' , component : ListaPaletaCorComponent} ,

    { path: 'projetoPalavraChave' , component : ProjetoPalavraChaveComponent },
    { path: 'projetoPalavraChave/:id' , component : ProjetoPalavraChaveDetalheComponent },

    { path: 'visitantesPorPaginaInstalacao/:id' , component: VisitantesPorPaginaInstalacaoAppComponent } ,
    { path: 'visitantesPorPaginaValidacao/:id' , component: VisitantesPorPaginaValidacaoWebComponent } ,

    { path: 'anuncioAppGerenciador/:id' , component: AnuncioAppGerenciadorComponent },

    { path : 'versaoAppLista/:id' , component : VersaoAppListaComponent },
    { path: 'visitantePorVersaoApp/:id' , component: VisitantePorVersaoAppComponent},

  
    { path: 'presencaLojaDetalhe/:id' , component : DisplayPresencaLojaComponent },
    { path: 'presencaLojaProjeto/:id' , component : PresencaLojaListaComponent },

    { path: 'versaoAppDetalhe/:id' , component : VersaoAppDetalheComponent },

    { path: 'listaItemValorProjeto/:id' , component : ListaItemValorPorProjetoComponent },

    { path: 'financeiroGeralProjeto' , component : ListaProjetoFinanceiroGeralComponent },
    { path: 'custoAno/:id' , component: CustoAnoComponent },

    { path: 'dispositivoUsuarioPorVersao/:id' , component: ListaDispositivoPorVersaoComponent },

    { path: 'projetosUsuario' , component : ProjetoUsuarioComponent},
    { path: 'projetosUsuario/:id' , component : ProjetoUsuarioDetalheComponent },

    { path: 'cosmeticCenterOportunidades' , component : CosmeticCenterOportunidadeComponent },
    { path: 'tecnologiaOportunidades' , component : TecnologiaOportunidadeComponent },
    { path: 'computadorMelhores' , component: ComputadorMelhoresComponent },
    { path: 'celularMelhores' , component: CelularMelhoresComponent },
    { path: 'tvMelhores' , component: TvMelhoresComponent },

    { path: 'projetoMetricaProduto' , component: ProjetoMetricaProdutoComponent },
    { path: 'metricaMesProduto/:id/:mes/:ano' , component: MetricaMesProdutoComponent },

    { path: 'indicadorProduto' , component: ListaIndicadorProdutoComponent},
    { path: 'indicadorProduto/:id' , component: EditaIndicadorProdutoComponent },
    { path: 'recursoProduto' , component : ListaRecursoProdutoComponent},
    { path: 'recursoProduto/:id' , component: EditaRecursoProdutoComponent },

    { path: 'funilNegocio' , component: ListaFunilComponent},
    { path: 'funilNegocio/:id' , component: ListaEtapaFunilComponent },

    { path: 'metricaCampanha/:id' , component: MetricaCampanhaComponent }, 
    { path: 'metricaVersaoApp/:id' , component: MetricaVersaoAppComponent },

    { path: 'detalheRecursoProduto/:id' , component: DetalheRecursoProdutoComponent },
    { path: 'visitaApp' , component: VisitaAppComponent },
    { path: 'erroLogicoLog' , component: ErroLogicoLogComponent },
    { path: 'monitorFaseInicialApp' , component : MonitorFaseInicialAppComponent },

    { path: 'explicaProcesso/:id' , component : ExplicaProcessoComponent }, 

    { path: 'projetoEvolucao/:id' , component: ProjetoEvolucaoComponent} ,

    { path: 'setupDetalhe/:id' , component: SetupDetalheComponent },

    { path: 'projetoResultado' , component: ProjetoResultadoComponent },
    { path: 'usuarioHistorico/:id' , component: UsuarioHistoricoComponent },
    { path: 'telaAppExibeDetalhe/:id' , component: TelaAppExibeDetalheComponent },

    { path: 'campanhaSemTabela' , component: CampanhaSemTabelaListComponent },

    { path: 'usuarioProdutoHistorico/:id' , component: UsuarioProdutoHistoricoComponent },
    { path: 'acessoAssinatura' , component: AcessoAssinaturaListComponent },

    { path: '',          redirectTo: 'home', pathMatch: 'full' }
]